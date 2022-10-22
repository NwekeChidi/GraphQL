const books = require('../data/books.json');
const authors = require('../data/authors.json');

exports.authorResolver = async (parent) => {
    return authors.find(author => author.id === parent.authorId)
}

exports.getAllBooks = books;
exports.getAllAuthors = authors;