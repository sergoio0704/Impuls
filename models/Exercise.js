const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  process: {type: String},
  point: {type: Types.Decimal128}
})

module.exports = model('Exercise', schema)