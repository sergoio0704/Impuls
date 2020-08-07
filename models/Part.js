const {Schema, model, Types} = require('mongoose')
const Theme = require('./Theme')


const schema = new Schema({
  partId: {type: Types.ObjectId, unique: true},
  partAccess: {type: Boolean},
  themes: [Theme]
})

module.exports = model('Part', schema)