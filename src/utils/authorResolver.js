const authors = require('../data/authors.json');

exports.authorResolver = (parent) => {
    return authors.find(author => author.id === parent.authorId)
}
exports.getAllAuthors = authors;