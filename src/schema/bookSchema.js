const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');



exports.BookSchema =  new GraphQLObjectType({
    name: 'Book',
    description: 'This represent an e-copy of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        isbn: { type: GraphQLString },
        title: { type: GraphQLNonNull(GraphQLString) },
        subtitle: { type: GraphQLString },
        authorId:  { type: GraphQLNonNull(GraphQLInt) },
        published: { type: GraphQLString },
        publisher: { type: GraphQLString },
        pages: { type: GraphQLInt },
        description: { type: GraphQLString },
        website: { type: GraphQLString },
    })
})