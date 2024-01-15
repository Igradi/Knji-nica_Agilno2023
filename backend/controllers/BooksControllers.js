const BookModel = require("../models/BookModel");
const UserBookModel = require("../models/UserBookModel");

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

const getBookByTitle = async (req, res) => {
  try {
    const title = req.body;
    console.log(title.value);
    const book = await BookModel.find({
      title: { $regex: title.value, $options: "i" },
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    const userBook = await UserBookModel.findOneAndDelete({
      idUser: userId,
      idBook: bookId,
    });

    if (!userBook) {
      return res.status(404).json({ message: "Knjiga nije pronađena ili nije iznajmljena od strane korisnika." });
    }

    res.status(200).json({ message: "Knjiga uspješno vraćena." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addBook,
  getAllBooks,
  getBook,
  updateBookDetails,
  getBookByTitle,
  returnBook,
};
