const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
} = require('graphql');
const { bookResolver } = require('../utils/booksResolver');
// const { BookSchema } = require('./bookSchema')

exports.AuthorSchema = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents the author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: GraphQLList(require('./bookSchema').BookSchema),
            resolve: (author) => {
                return bookResolver(author);
            }
        }
    })
})