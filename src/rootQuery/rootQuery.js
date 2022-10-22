const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList
} = require('graphql');
const { BookSchema } = require('../schema/bookSchema');
const { AuthorSchema } = require('../schema/authorSchema');
const { getAllAuthors, getAllBooks } = require('../utils/dataResolver');

const RootQuery = new GraphQLObjectType({
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
        }
    })
})

exports.Schema = new GraphQLSchema({
    query: RootQuery
})