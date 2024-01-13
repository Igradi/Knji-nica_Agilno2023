const { getBook } = require("../controllers/BooksControllers");

const router = require("express").Router();

router.get("/bookdetails/:id", getBook).get("/editbookdetails/:id", getBook);

module.exports = router;
