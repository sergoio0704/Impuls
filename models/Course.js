const {Schema, model, Types} = require('mongoose')
const Part = require('./Part')

const schema = new Schema({
  courseAccess: {type: String},
  parts: [{
    ref: 'Part',
    type: Types.ObjectId
  }]
})
module.exports = model('Course', schema)