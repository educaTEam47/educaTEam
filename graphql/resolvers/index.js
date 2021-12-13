const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const classesResolvers = require('./classes');

module.exports ={
    Query:{
        ...postsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation
    }
}