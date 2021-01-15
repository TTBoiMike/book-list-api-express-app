// define empty array to get books
let bookList = []
// define id variable to assign books an identification 
let bookId = 1

// return all books
exports.index = function (req, res) {
    res.send({"Total Books": bookId, "All Books": bookList})
}

// add book to the list
exports.add = function (req, res) {
    console.log(req.body)
    bookList.push({"id": bookId, "title": req.body.title, "Author": req.body.author, "hasRead": req.body.hasRead})
    res.send(`${req.body.title} has been added to your book list`)
    bookId++
}

// remove book from the list
exports.remove = function (req, res) {
    bookList.filter(book => book.bookId !== req.params.id)
    res.send(`${req.body.title} has been removed from your book list.`)
}

// edit a book listing by ID
exports.edit = function (req, res) {

}