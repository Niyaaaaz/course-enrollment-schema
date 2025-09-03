const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true 
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  enrollmentDate: {
    type: Date,
    default: Date.now 
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'   // Correct ref
    }
  ]
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  description: {
    type: String,
    required: true
  },
  durationWeeks: {
    type: Number,
    required: true 
  },
  instructor: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Student, Course };
