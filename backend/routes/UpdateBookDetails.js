const { updateBookDetails } = require("../controllers/BooksControllers");

const router = require("express").Router();

router.post("/editbookdetails/:id", updateBookDetails);

module.exports = router;
