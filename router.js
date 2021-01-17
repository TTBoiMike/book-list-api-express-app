const express = require('express')
const router = express.Router()
const bookMethods = require('./bookListMethods')

// show all books (.get)
router.get('/', bookMethods.index)
// add new book (.post)
router.post('/add', bookMethods.add)
// mark as read (.put)
router.put('/edit/:id', bookMethods.markRead)
// return book by id (.get)
router.get('/view/:id', bookMethods.return)
// delete book by id (.delete)
router.delete('/remove/:id', bookMethods.remove)
// return all authors in the list
router.get('/authors', bookMethods.authors)
// search for all books by an author (by surname)
router.get('/search', bookMethods.search)
module.exports = router