let products = [
    {
        "name": "Basic T-shirt",
        "price": "19.99",
        "image": "https://via.placeholder.com/150",
        "tags": ["clothing", "sale"],
        "subcategory": "Men",
        "material": "Cotton",
        "stock": 5
    },
    {
        "name": "Jeans",
        "price": 39.99,
        "image": "https://via.placeholder.com/150",
        "tags": ["clothing", null],
        "subcategory": "Women",
        "material": null,
        "stock": 0
    },
    {
        "name": "Sports Shoes",
        "price": "59,99",
        "image": "https://via.placeholder.com/150",
        "tags": null,
        "subcategory": "Men",
        "material": "Synthetic",
        "stock": 3
    },
    {
        "name": "Rain Jacket",
        "price": 89.99,
        "image": "https://via.placeholder.com/150",
        "tags": ["clothing", "new"],
        "subcategory": "Women",
        "material": "Polyester",
        "stock": "out of stock"
    },
    {
        "name": "Leather Wallet",
        "price": null,
        "image": "https://via.placeholder.com/150",
        "tags": ["accessory", "gift"],
        "subcategory": "Unisex",
        "material": "Leather",
        "stock": 15
    },
    {
        "name": "Wool Scarf",
        "price": 25.50,
        "image": "https://via.placeholder.com/150",
        "tags": ["accessory", "winter"],
        "subcategory": null,
        "material": "Wool",
        "stock": null
    },
    {
        "name": "Sunglasses",
        "price": "49.90",
        "image": "https://via.placeholder.com/150",
        "tags": ["accessory", "sale"],
        "subcategory": "Men",
        "material": "Plastic",
        "stock": 8
    },
    {
        "name": null,
        "price": 99.99,
        "image": "https://via.placeholder.com/150",
        "tags": ["footwear"],
        "subcategory": "Women",
        "material": "Leather",
        "stock": 2
    }
];

products.map(product => {
    if(product.price) {
        product.price = parseFloat(product.price);
    }
    return product;
});

export default products;