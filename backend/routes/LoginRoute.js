const { login } = require("../controllers/UserControllers");

const router = require("express").Router();

router.post("/login", login);

module.exports = router;
