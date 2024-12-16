import { Liquid }  from 'liquidjs';

import productTags from './filters/productTags';
import productCategories from './filters/productCategories';
import productPrice from './filters/productPrice';

const engine = new Liquid({
    root: [
        '../views/',
    ],
    extname: '.liquid'
});

engine.registerFilter('productTags', productTags);
engine.registerFilter('productCategories', productCategories);
engine.registerFilter('productPrice', productPrice);

export default engine;