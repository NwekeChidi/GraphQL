const path = require('path');
const fsp = require('fs/promises');
const books = require('../data/books.json');
const authors = require('../data/authors.json');

const checkAuthor = (args) => {
    return authors.filter(author => author.name === args.authorName)
}
const checkBook = (args) => {
    const bookExist = books.filter(book => book.title === args.title);
    if(bookExist.length !== 0) return bookExist[0];
    else return undefined
}

exports.getOneBook = (parent, args) => {
    return books.find(book => book.id === args.id);
}
exports.bookResolver = (parent) => {
    return books.filter(book => book.authorId === parent.id);
}

exports.addBook = async (parent, args) => {
    const bookExists = checkBook(args);
    if (bookExists) return bookExists;
    args.id = books.length + 1;
    const authorExists = checkAuthor(args);
    const { authorName } = args; delete args.authorName;
    books.push(args);
    if (authorExists.length === 0) {
        const author = {
            id: authors.length + 1,
            name: authorName
        }
        authors.push(author);
        await fsp.writeFile(path.join(__dirname,'../data/books.json'), JSON.stringify(books))
        await fsp.writeFile(path.join(__dirname, '../data/authors.json'), JSON.stringify(authors))
        return args;
    }
    await fsp.writeFile(path.join(__dirname,'../data/books.json'), JSON.stringify(books))
    return args;

    
}
exports.getAllBooks = books;