const { register } = require("../controllers/UserControllers");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
