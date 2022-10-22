const { GraphQLSchema } = require('graphql');
const { RootQuery } = require('./readQuery')

exports.Schema = new GraphQLSchema({
    query: RootQuery
})