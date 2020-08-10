const {Schema, model, Types} = require('mongoose')
const Student = require('./Student')
const Course = require('./Course')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  lvlAccess: {type: String},
  balance: {type: Number},  
  points: {type: Number},
  courses: [{
    ref: 'Course',
    type: Types.ObjectId
  }],
  students: [{
    ref: 'Student',
    type: Types.ObjectId
  }],
})

module.exports = model('User', schema)