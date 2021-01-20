const express = require('express')
const router = express.Router()
const bookMethods = require('./bookListMethods')

// show all books (.get)
router.get('/books', bookMethods.index)
// add new book (.post)
router.post('/books', bookMethods.add)
// mark as read (.put)
router.put('/books/:id', bookMethods.markRead)
// return book by id (.get)
router.get('/books/:id', bookMethods.return)
// delete book by id (.delete)
router.delete('/books/:id', bookMethods.remove)
// return all authors in the list
router.get('/books/authors', bookMethods.authors)
// search for all books by an author (by surname)
router.get('/books/search', bookMethods.search)
module.exports = router