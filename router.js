const express = require('express')
const router = express.Router()
const bookMethods = require('./bookListMethods')

// show all books (.get)
router.get('/books', bookMethods.index)
// add new book (.post)
router.post('/add', bookMethods.add)
// delete book (.put)
router.delete('/remove/:id', bookMethods.remove)
// edit book (.put)
// return books (.get)
// return book by id (.get)
// delete book by id (.delete)

module.exports = router