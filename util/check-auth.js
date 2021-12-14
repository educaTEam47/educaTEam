const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../config');
const { AuthenticationError } = require('apollo-server');

module.exports = (context) =>{
  // context ={ ... headers}
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        // Bearer ...
         const token = authHeader.split('Bearer ')[1];
         if(token){
             try{
                 const user = jwt.verify(token, SECRET_KEY);
                 return user;
             }catch(err){
                 throw new AuthenticationError('Token Invalida / Expirada')
             }
         } throw new Error('La token debe ser de la forma\'Bearer [token]');
    }
    throw new Error('No hay Header de autenticacion');
}