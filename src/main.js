import './style.css';

import frontexpress from 'frontexpress';
import engine from './liquid/engine';

import home from './pages/home';
import products from './pages/products';

import { getState } from './tools/state';

const app = frontexpress();

app.use((req, res, next) => {
    res.root = document.getElementById('app');
    res.root.addEventListener(
        "rerender",
        () => history.go(0),
        false,
    );
    next();
});

app.use((req, res, next) => {
    const { filters, sorting } = getState();
    res.filters = filters;
    res.sorting = sorting;
    next();
});

app.use((req, res, next) => {
    res.engine = engine;
    next();
});

app.get('/', home);
app.get('/products', products);

app.listen();