const filterParameters = [
    'priceMin',
    'priceMax',
    'tag',
    'category'
];

export default function filterProducts(products, { filters }) {

    if(!Array.isArray(products)) {
        return products;
    }

    Object.keys(filters)
        .filter(filter => {
            return filters[filter] && filterParameters.includes(filter);
        })
        .forEach(filter => {
            if(filter === 'tag') {
                products = filterProductsByTag(products, filters[filter]);
                return;
            }
            if(filter === 'category') {
                products = filterProductsByCategory(products, filters[filter]);
                return;
            }

            products = filterProductsByPrice(products, filters.priceMin || null, filters.priceMax || null);
        });

    return products;
}

function filterProductsByTag(products, tag) {
    return products.filter(product => product.tags && product.tags.includes(tag));
}

function filterProductsByCategory(products, category) {
    return products.filter(product => product.subcategory === category);
}

function filterProductsByPrice(products, minPrice, maxPrice) {
    return products.filter(product => {

        if(!product.price) {
            return false;
        }

        // Check min price if provided
        if (minPrice && product.price <= minPrice) {
            return false;
        }

        // Check max price if provided
        if (maxPrice && product.price >= maxPrice) {
            return false;
        }

        return true;
    });
}