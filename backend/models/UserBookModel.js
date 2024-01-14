const mongoose = require('mongoose')

const userBookSchema = new mongoose.Schema({
  idUser: { type: String },
  idBook: { type: String },
})

module.exports = mongoose.model('Iznajmljivanje', userBookSchema)
