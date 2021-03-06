const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose  = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers/');
const{MONGODB} = require('./config.js');




const server = new ApolloServer ({
    typeDefs,
    resolvers,
    context :({req})=>({ req })
});



mongoose.connect(MONGODB,{useNewUrlParser:true}).then(()=>{
    console.log("Conexion Exitosa con la base de datos");
    return server.listen({port:4000})
}).then(res =>{console.log(`Servidor Iniciado Correctamente en puerto: : ${res.url}`)});

