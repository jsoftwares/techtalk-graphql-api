const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: () => productsModel.getAllProducts(),
        product: (_, args) => productsModel.getProductById(args.id),
        productsByPrice: (_, args) => productsModel.getProductsByPrice(args.min, args.max)
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.title, args.price, args.description);
        },
        addProductReview: (_, args) => {
            return productsModel.addProductReview(args.id, args.rating, args.comment);
        }
    }
};