const {Schema, model} = require('mongoose')
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
  courses: [Course],
  students: [Student],
})

module.exports = model('User', schema)