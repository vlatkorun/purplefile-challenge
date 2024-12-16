export default function productCategories(products) {
    const categories = [];

    if(!Array.isArray(products)) {
        return categories;
    }

    products.forEach((product) => {
        if(product.hasOwnProperty('subcategory') && product.subcategory && !categories.includes(product.subcategory)) {
            categories.push(product.subcategory);
        }
    });

    return categories;
}