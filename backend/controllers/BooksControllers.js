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
    res.status(200).json({
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

const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await BookModel.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

const updateBookDetails = async (req, res) => {
  try {
    const { title, authorName, authorLastName, genre, description, image } =
      req.body;
    const id = req.params.id;
    console.log(title);
    const updateBook = await BookModel.findByIdAndUpdate(
      id,
      {
        title: title,
        authorName: authorName,
        authorLastName: authorLastName,
        genre: genre,
        description: description,
        image: image,
      },
      { new: true }
    );
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBook, getAllBooks, getBook, updateBookDetails };
