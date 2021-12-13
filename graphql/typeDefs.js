const {gql} = require ('apollo-server');
module.exports = gql`
    type Post{
        id:ID!
        classId:String!
        body:String!
        username:String!
        createdAt:String! 
    }
 
    type Query{
        getPosts: [Post]
    }

   type User{
       id:ID!
       Name:String!
       password:String!
       confirmPassword:String!
       email: String!
       identification:String!
       number:String!
       direction:String!
       faculty:String!
       type:String
       token: String!
       createdAt:String!
   } 

   input RegisterInput{
       Name:String!
       password:String!
       confirmPassword:String!
       email: String!
       identification:String!
       number:String!
       direction:String!
       faculty:String!
       type:String
   }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(email:String!,password:String!) : User!
    }
`;

