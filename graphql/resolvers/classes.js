const Class = require('../../models/Class');
const checkAuth = require('../../util/check-auth');
const { AuthenticationError } = require('apollo-server');


module.exports={
     Query:{
        async getClasses(){
         try{ const classes = await Class.find().sort({createdAt: -1});
         return classes;
        }catch(err){
            console.log(err);
        }
     },  
        async getClass(_,{classId}){
            try{
                const classind = Class.findById(classId);
                if(classind){
                    return classind
                } else {
                    throw new Error('La clase no existe');
                }
            } catch(err){throw new Error(err);}
        }, 
 },
    Mutation:{
        async createClass(_,{ className,classFaculty},context){
        const user = checkAuth(context);
        console.log(user);
        const newClass= new Class({
            className,
            professorID : user.id,
            classFaculty,
            createdAt: new Date().toISOString()
        });

        const classind =await newClass.save();
        return classind;
        },

        async deleteClass(_,{classId},context){
            const user=checkAuth(context);
            try{
                const classind = await Class.findById(classId);
                console.log("Classe:");
                console.log(classind);
                if(user.id === classind.professorID){
                    await classind.delete();
                    return 'Clase Eliminada';
                } else {
                    throw new AuthenticationError('Accion No Permitida');
                }
            } catch(err){
                 throw new Error(err);
            }
        }
    }
}