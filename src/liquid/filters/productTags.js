export default function productTags(products) {
    const tags = [];

    if(!Array.isArray(products)) {
        return tags;
    }

    products.forEach((product) => {
        if(product.hasOwnProperty('tags') && Array.isArray(product.tags)) {
            product.tags.forEach((tag) => {
                if(tag && !tags.includes(tag)) {
                    tags.push(tag);
                }
            });
        }
    });

    return tags;
}