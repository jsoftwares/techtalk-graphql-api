const path = require('path');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {loadFilesSync} = require('@graphql-tools/load-files');

/**loadFilesSync() in our usage helps load/merge all files that ends with .graphql in any folder relative to 
 * server.js file. It returns as array of strings.
 */
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolverArray
    // {
    //     Query: {
    //         products: async (parent, args, context, info) => {
    //             console.log('Getting products');
    //             const products = await Promise.resolve(parent.products);
    //             return products;
    //         },
    //         orders: (parent) => {
    //             console.log('Getting orders');
    //             return parent.orders;
    //         }
    //     }
    // }
});

// Data now comes from out executable schema from each of our resolver functions that talk directly to our models
// const root = {
//     products: require('./products/products.model'),
//     orders: require('./orders/orders.model')
// };

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true
}));

app.listen(3000, () => console.log('Running GraphQL server...'));