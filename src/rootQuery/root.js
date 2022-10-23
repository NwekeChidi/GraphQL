const { GraphQLSchema } = require('graphql');
const { RootReadQuery } = require('./readQuery')
const { RootWriteQuery } = require('./writeQuery')

exports.Schema = new GraphQLSchema({
    query: RootReadQuery,
    mutation: RootWriteQuery
})