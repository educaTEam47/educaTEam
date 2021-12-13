const {model,Schema} = require('mongoose');

const userSchema = new Schema({
    Name : String,
    password : String,
    identification:String,
    email: String,
    number : String,
    direction : String,
    faculty : String,
    type : String,
    createdAt: String
})

module.exports = model('User', userSchema);