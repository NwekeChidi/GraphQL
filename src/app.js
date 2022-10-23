const express = require('express');
const morgan = require('morgan');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(morgan('dev'))
app.use('/graphql', graphqlHTTP({
    schema: require('./rootQuery/root').Schema,
    graphiql: true
}));


module.exports = app;