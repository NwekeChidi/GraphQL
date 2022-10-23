const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');
const { BookSchema } = require('../schema/bookSchema');
const { AuthorSchema } = require('../schema/authorSchema');

const { addBook } = require('../utils/booksResolver');

exports.RootWriteQuery = new GraphQLObjectType({
    name: 'Write',
    description: 'This is the root write query',
    fields: () => ({
        addBook: {
            type: BookSchema,
            description: 'Add a book',
            args: {
                isbn: { type: GraphQLString },
                title: { type: GraphQLNonNull(GraphQLString) },
                subtitle: { type: GraphQLString },
                authorName:  { type: GraphQLNonNull(GraphQLString) },
                published: { type: GraphQLString },
                publisher: { type: GraphQLString },
                pages: { type: GraphQLInt },
                description: { type: GraphQLString },
                website: { type: GraphQLString },
            },
            resolve: async (parent, args) => await addBook(parent, args)
        }
    })
})