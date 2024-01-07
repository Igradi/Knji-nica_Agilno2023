const { addBook } = require("../controllers/BooksControllers");

const router = require("express").Router();

router.post("/addbook", addBook);

module.exports = router;
