const { deleteBookById } = require('../controllers/BooksControllers')

const router = require('express').Router()

router.delete('/books/:id', deleteBookById)

module.exports = router
