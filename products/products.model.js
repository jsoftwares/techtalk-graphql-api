const products = [
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

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByPrice,
}