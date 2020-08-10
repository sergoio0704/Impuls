const {Schema, model, Types} = require('mongoose')
const Theme = require('./Theme')


const schema = new Schema({
  partAccess: {type: Boolean},
  themes: [{
    ref: 'Theme',
    type: Types.ObjectId
  }]
})

module.exports = model('Part', schema)