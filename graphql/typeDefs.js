const {gql} = require ('apollo-server');
module.exports = gql`
    type Post{
        id:ID!
        classId:String!
        body:String!
        username:String!
        createdAt:String! 
    }

    type Class{
        id:ID!
        className:String
        professorID:String
        classFaculty:String
        createdAt:String
    }
 
    type Query{
        getPosts: [Post]
        getPost(postId:ID!):Post
        getClasses:[Class]
        getClass(classId:ID!):Class
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
        createPost(body:String!):Post!
        deletePost(postId:ID!):String!
        createClass(className:String!,classFaculty:String!):Class!
        deleteClass(classId:ID!):String!
    }


`;

