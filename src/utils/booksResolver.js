const books = require('../data/books.json');

exports.getOneBook = (parent, args) => {
    return books.find(book => book.id === args.id);
}
exports.bookResolver = (parent) => {
    return books.filter(book => book.authorId === parent.id);
}
exports.getAllBooks = books;