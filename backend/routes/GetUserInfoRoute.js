const { getUserById } = require("../controllers/UserControllers");

const router = require("express").Router();

router.post("/getUserById", getUserById);

module.exports = router;
