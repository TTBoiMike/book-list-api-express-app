const createError = require('http-errors')
// define empty array to get books
let bookList = []
// define id variable to assign books an identification 
let bookId = 0

// return all books
exports.index = function (req, res) {
    res.send({"Total Books": bookId, "All Books": bookList})
}

// add book to the list
exports.add = function (req, res, next) {
    console.log(req.body)
    bookId++
    if(!req.body.title || !req.body.author) {
        return(next(createError(400, "Incomplete information.")))
    }
    bookList.push({"id": bookId, "title": req.body.title, "author": req.body.author, "hasRead": false})
    res.send(`${req.body.title} has been added to your reading list.`)
}

// remove book from the list using an id
exports.remove = function (req, res) {
    bookList.filter(book => book.bookId !== req.params.id)
    res.send(`This book has been removed from your reading list.`)
}

// mark as read
exports.markRead = (req, res) => {
    bookList[req.params.id-1].hasRead = true
    res.send(`You've marked ${bookList[req.params.id].title} as read.`)
}

// return book by Id
exports.return = (req, res) => {
    const book = bookList.find(book => book.id == req.params.id)
    if(!book) {
        return(next(createError(400, "No book with that ID in the list.")))
    }
    res.send(book)
}

// return all authors in the reading list
exports.authors = (req, res) => {
    const authorList = []
    bookList.forEach(book => authorList.push(book.author))
    res.send(authorList)
}