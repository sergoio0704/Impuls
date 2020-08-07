const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  userId: {type: Types.ObjectId, unique: true},
  userEmail: {type: String, unique: true}  
})

module.exports = model('Student', schema)