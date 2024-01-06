const { getAllUsers } = require("../controllers/UserControllers");

const router = require("express").Router();

router.get("/users", getAllUsers);

module.exports = router;
