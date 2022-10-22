const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} = require('graphql');
const { BookSchema } = require('../schema/bookSchema');
const { AuthorSchema } = require('../schema/authorSchema');
const {
    getAllAuthors,
    getOneAuthor
} = require('../utils/authorResolver');
const { 
    getAllBooks,
    getOneBook
} = require('../utils/booksResolver');

exports.RootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => ({
        allBooks: {
            type: GraphQLList(BookSchema),
            description: 'This is a list of all the books in DB',
            resolve: () => getAllBooks
        },
        allAuthors: {
            type: GraphQLList(AuthorSchema),
            description: 'This is a list of all the authors in DB',
            resolve: () => getAllAuthors
        },
        book: {
            type: BookSchema,
            description: 'This is a single book',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => getOneBook(parent, args)
        },
        author: {
            type: AuthorSchema,
            description: 'This is a single author',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => getOneAuthor(parent, args)
        }
    })
})