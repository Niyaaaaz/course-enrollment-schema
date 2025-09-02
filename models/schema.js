const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required : true,
    unique: true 
  },
  enrollmentDate: {
    type: Date,
    default: Date.now 
  },
  courses: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'course' 
  }
});


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required : true
  },
  durationWeeks: {
    type : Number,
    required : true 
  },
  instructor: {
    type : String,
    required : true
  },
});


const Student = mongoose.model('User', studentSchema);
const Course = mongoose.model('User', courseSchema);

module.exports = {Student, Course};
