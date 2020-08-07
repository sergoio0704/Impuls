const {Schema, model, Types} = require('mongoose')
const Part = require('./Part')

const schema = new Schema({
  courseId: {type: Types.ObjectId, unique: true},
  courseAccess: {type: String},
  parts: [Part]
})
module.exports = model('Course', schema)