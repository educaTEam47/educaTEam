const {model,Schema} = require('mongoose');

const classSchema = new Schema({
className:String,
professorID:String,
classFaculty:String
})

module.exports = model('Class', classSchema);