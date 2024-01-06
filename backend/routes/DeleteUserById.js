const { deleteUserById } = require("../controllers/UserControllers");

const router = require("express").Router();

router.delete('/users/:id', deleteUserById);

module.exports = router;
