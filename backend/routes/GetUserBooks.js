const { getUserBooks } = require("../controllers/UserControllers");

const router = require("express").Router();

router.get("/user/:userId/books", getUserBooks);

module.exports = router;
