const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');
const books = require('../data/books.json');
const { BookSchema } = require('../schema/bookSchema');

const RootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => ({
        allBooks: {
            type: GraphQLList(BookSchema),
            description: 'This is a list of all the books in DB',
            resolve: () => books
        }
    })
})

exports.Schema = new GraphQLSchema({
    query: RootQuery
})