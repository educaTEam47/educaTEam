const {model,Schema} = require('mongoose');

const classSchema = new Schema({
className:String,
professorID:String,
classFaculty:String,
studentList:[{studentID:String
,studentName:String
}],
createdAt:String
})

module.exports = model('Class', classSchema);