const { register } = require("../controllers/RegisterControllers");

const router = require("express").Router();

router.post("/register", register);

module.exports = router;
