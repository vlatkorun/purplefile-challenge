const sortParameters = [
    'priceDesc',
    'priceAsc',
    'nameAsc'
];

export default function sortProducts(products, { sortBy }) {

    if(!sortBy) {
        return products;
    }

    if(!sortParameters.includes(sortBy)) {
        return products;
    }

    switch (sortBy) {
        case 'priceAsc':
            return sortByPriceAsc(products);
        case 'priceDesc':
            return sortByPriceDesc(products);
        case 'nameAsc':
            return sortByNameAsc(products);
    }

    return products;
}

function sortByPriceDesc(products) {
    return products.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
    });
}

function sortByPriceAsc(products) {
    return products.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
    });
}

function sortByNameAsc(products) {
    return products.sort((a, b) => {
        if (a.name === null) return 1;
        if (b.name === null) return -1;
        return a.name.localeCompare(b.name);
    });
}