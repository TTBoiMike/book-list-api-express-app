const createError = require('http-errors')
// define empty array to get books
let bookList = []
// define id variable to assign books an identification 
let bookId = 0

// return all books
exports.index = (req, res) => {
    res.send({"Total Books": bookId, "All Books": bookList})
}

// add book to the list
exports.add = (req, res, next) => {
    console.log(req.body)
    bookId++
    if(!req.body.title || !req.body.author) {
        return(next(createError(400, "Incomplete information.")))
    }
    bookList.push({"id": bookId, "title": req.body.title, "author": {"surname": req.body.author.surname, "firstname": req.body.author.surname}, "hasRead": false})
    res.send(`${req.body.title} has been added to your reading list.`)
}

// remove book from the list using an id
exports.remove = (req, res) => {
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

// search by book title
// colt bc - search?=
exports.search = (req, res) => {
    console.log("search query =", req.query.q);
    const filteredList = bookList.filter(book => book.author.surname.toLowerCase() == req.query.q)
    if(filteredList == []) {
        res.send("Sorry, we couldn't find any authors under that name")
    } else {
        res.send(filteredList)
    }
}