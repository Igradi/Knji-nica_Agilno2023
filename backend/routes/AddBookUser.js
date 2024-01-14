const { addBookAndUser } = require("../controllers/UserControllers");

const router = require("express").Router();

router.post("/addbookanduser", addBookAndUser);

module.exports = router;
