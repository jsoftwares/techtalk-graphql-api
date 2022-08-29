const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        title: String!
        description: String
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String!
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
    products: [
        {
            id: 'redshoe',
            title: 'Red Shoe',
            description: 'A red smart shoe',
            price: 42.12
        },
        {
            id: 'bluejeans',
            title: 'Blue Jeans',
            description: 'A blue smart jeans',
            price: 55.55
        },
    ],
    orders: [
        {
            date: '2008-07-27',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        title: 'Red Shoe',
                        description: 'A red smart shoe',
                        price: 42.12
                    },
                    quantity: 2
                }
            ]
        }
    ] 
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => console.log('Running GraphQL server...'));