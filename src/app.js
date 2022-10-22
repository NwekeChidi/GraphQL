const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');

const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloGraphQLWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello GraphQL World'
            }
        })
    })
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


module.exports = app;