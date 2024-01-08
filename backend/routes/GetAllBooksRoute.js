const { getAllBooks } = require('../controllers/BooksControllers')

const router = require('express').Router()

router.get('/books', getAllBooks)

module.exports = router
