const books = require('../data/books.json');

exports.getOneBook = (id) => {
    return books.find(book => book.id === id);
}
exports.bookResolver = (parent) => {
    return books.filter(book => book.authorId === parent.id);
}
exports.getAllBooks = books;