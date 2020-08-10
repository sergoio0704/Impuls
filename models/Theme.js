const {Schema, model, Types} = require('mongoose')
const Exercise = require('./Exercise')

const schema = new Schema({
  themeMaxPoints: {type: Number},
  themeAccess: {type: String},
  exercises: [{
    ref: 'Exercise',
    type: Types.ObjectId
  }]
})

module.exports = model('Theme', schema)