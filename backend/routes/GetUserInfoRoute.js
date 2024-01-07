const { getUserById } = require('../controllers/UserControllers');

const router = require('express').Router();

router.get('/users/:id', getUserById);

module.exports = router;