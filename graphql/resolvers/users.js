const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require('apollo-server');

const {validateRegisterInput , validateLoginInput } = require('../../util/validators');
const { SECRET_KEY } = require('../../config');

function generateToken(user){
    return jwt.sign({
        id:user.id,
        email:user.email,
        Name:user.Name,
        type:user.type
    },SECRET_KEY, { expiresIn:'1h'});
}


module.exports={
    Mutation :{
        async login(_,{email,password}){
            const {errors, valid}=validateLoginInput(email,password);
            
            if(!valid){
                errors.general = "Los datos no pueden ser vacios";
                throw new UserInputError(' Datos Vacios ',{errors});
            }
            
            const user= await User.findOne({email})
            if(!user){
                errors.general = "El usuario no existe";
                throw new UserInputError('Datos incorrectos, no se  encuentra el usuario con esos datos',{errors});
            }
            const match = await bcrypt.compare(password,user.password);
            if(!match){
                errors.general = "Contraseña Incorrecta";
                throw new UserInputError('Datos incorrectos, Contraseña Incorrecta',{errors});
            }

            const token = generateToken(user);
            return {
                ...user._doc,
                id:user._id,
                token
            };
        },
        async  register(_, {
registerInput : {Name,password,confirmPassword,email,identification,number,direction,faculty,type}
        }, context, info){
            // Validar datos usuario
            const {valid,errors} = validateRegisterInput(Name,password,confirmPassword,email,identification,number,direction,faculty,type);
            if (!valid){
                throw new UserInputError('Errors',{errors});
            }
            //Que el usuario no este registrado ya
            const user =await User.findOne({ email});
            if(user){
               throw new UserInputError('El Email ya esta siendo utilizado', {
                   errors:{
                       username:'Este Email ya esta en uso'
                   }
               })
            }
            //Hash Contraseña y poner una authtoken
            password = await bcrypt.hash(password,12);

            const newUser = new User({
                Name,
                password,
                confirmPassword,
                email,
                identification,
                number,
                direction,
                faculty,
                type,
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();
            const token = generateToken(res);
            return {
                ...res._doc,
                id:res._id,
                token
            };
        }
    }
}