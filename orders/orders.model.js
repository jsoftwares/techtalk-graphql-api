const orders = [
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
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}