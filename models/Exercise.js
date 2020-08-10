const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  process: {type: String},
  point: {type: Number}
})

module.exports = model('Exercise', schema)