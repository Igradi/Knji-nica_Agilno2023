const BookModel = require("../models/BookModel");

const addBook = async (req, res) => {
  try {
    const { title, authorName, authorLastName, genre, description, image } =
      req.body;

    const book = await BookModel.create({
      title,
      authorName,
      authorLastName,
      genre,
      description,
      image,
    });
    res
      .status(200)
      .json({
        title: title,
        authorName: authorName,
        authorLastName: authorLastName,
        genre: genre,
        description: description,
        image: image,
      });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addBook };
