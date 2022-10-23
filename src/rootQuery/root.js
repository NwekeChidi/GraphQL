const { GraphQLSchema } = require('graphql');
const { RootReadQuery } = require('./readQuery')

exports.Schema = new GraphQLSchema({
    query: RootReadQuery
})