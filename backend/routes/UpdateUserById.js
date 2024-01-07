const { updateUserById } = require("../controllers/UserControllers");

const router = require("express").Router();

router.post('/users/:id', updateUserById);

module.exports = router;
