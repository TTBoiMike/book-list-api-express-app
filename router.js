const express = require('express')
const router = express.Router()
const bookMethods = require('./bookListMethods')

// show all books (.get)
router.get('/books', bookMethods.index)
// add new book (.post)
router.post('/add', bookMethods.add)
// mark as read (.put)
router.post('/edit/:id', bookMethods.markRead)
// return book by id (.get)
router.get('/return/:id', bookMethods.return)
// delete book by id (.delete)
router.delete('/remove/:id', bookMethods.remove)
// return all authors in the list
router.get('/authors', bookMethods.authors)

module.exports = router