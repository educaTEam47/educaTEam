const {model,Schema} = require('mongoose');

const postSchema = new Schema({
    classId:String,
    body:String,
    username:String,
    createdAt:String,
    comments:[{
        body:String,
        username:String,
        createdAt:String
    }],
    likes:[{
        username:String,
        createdAt:String
    }],
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    }
})

module.exports = model('Post',postSchema);