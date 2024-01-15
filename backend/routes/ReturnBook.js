const { returnBook } = require("../controllers/BooksControllers");

const router = require("express").Router();

router.post("/returnbook", returnBook);

module.exports = router;
