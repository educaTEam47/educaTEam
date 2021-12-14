const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const classesResolvers = require('./classes');

module.exports ={
    Query:{
        ...postsResolvers.Query,
        ...usersResolvers.Query,
        ...classesResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation,
        ...classesResolvers.Mutation,
        
    }
}