const {
  getAllBooks,
  getBookByTitle,
} = require("../controllers/BooksControllers");

const router = require("express").Router();

router.get("/books", getAllBooks).post("/books", getBookByTitle);

module.exports = router;
