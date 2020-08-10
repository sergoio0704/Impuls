const {Schema, model, Types} = require('mongoose')
const User = require('./User')

const schema = new Schema({
  userId: {type: Types.ObjectId, ref: 'User'},
  userEmail: {type: String, unique: true}  
})

module.exports = model('Student', schema)