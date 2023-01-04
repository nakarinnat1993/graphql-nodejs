const express = require('express');
const graphqlMiddleware = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');

const app = express();

// app.use(function(req, res, next) {
//     res.send("Home");
// });
// app.use('/hello', function(req, res, next) {
//     res.json({data: 'Hello'});
// });

const schema = buildSchema(`
    type Query {
        hello: String
        world: String
    }
`);
const resolver = {
    hello() {
        return 'Hello';
    },
    world() {
        return 'World';
    }
}

app.use(graphqlMiddleware({
    schema,
    rootValue: resolver,
    graphiql: true
}))
app.listen('8888');