const products = [
    {
        id: 'redshoe',
        title: 'Red Shoe',
        description: 'A red smart shoe',
        price: 42.12,
        reviews: []
    },
    {
        id: 'bluejeans',
        title: 'Blue Jeans',
        description: 'A blue smart jeans',
        price: 55.55,
        reviews: []
    },
];

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => {
        return product.id === id
    });
}

function getProductsByPrice(min, max) {
    return products.filter(product => {
        return (product.price >= min && product.price <=max)
    });
}

function addNewProduct(id, title, price, description) {
    const newProduct = {
        id,
        title,
        price, 
        description,
        reviews: []
    }

    products.push(newProduct);
    return newProduct;
}

function addProductReview(id, rating, comment) {
    const product = getProductById(id);
    if (product) {
        const review = {
            rating,
            comment
        };
        product.reviews.push(review);
    }
    return product;
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByPrice,
    addNewProduct,
    addProductReview,
}