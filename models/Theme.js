const {Schema, model, Types} = require('mongoose')
const Exercise = require('./Exercise')

const schema = new Schema({
  themeId: {type: Types.ObjectId},
  themeMaxPoints: {type: Number},
  themeAccess: {type: String},
  exercises: [Exercise]
})

module.exports = model('Theme', schema)