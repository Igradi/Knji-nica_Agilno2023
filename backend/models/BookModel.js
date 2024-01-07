const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String },
  authorName: { type: String },
  authorLastName: { type: String },
  genre: { type: String },
  description: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("Books", bookSchema);
