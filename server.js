const path = require('path');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {loadFilesSync} = require('@graphql-tools/load-files');


const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express();
    
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolverArray
    });

    const server = new ApolloServer({
        schema,
    });
    await server.start();   //tells apollo to prepare to handle incoming GraphQL operations
    // applyMiddleware() connects apollo's  GraphQL middleware with our express server
    server.applyMiddleware({ app, path: '/graphql'});

    // Finally we start listening for HTTP requests (whether they are GraphQL or other requests that would be handled by express)
    app.listen(3000, () => console.log('Running GraphQL server...'));
}

startApolloServer();

