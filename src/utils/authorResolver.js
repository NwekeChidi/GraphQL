const authors = require('../data/authors.json');

exports.authorResolver = (parent) => {
    return authors.find(author => author.id === parent.authorId)
}
exports.getOneAuthor = (parent, args) => {
    return authors.find(author => author.id === args.id);
}
exports.getAllAuthors = authors;