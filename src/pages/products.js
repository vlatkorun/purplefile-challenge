import { setState } from '../tools/state';
import dataset from '../products/dataset';
import sortProducts from '../products/sortProducts';
import filterProducts from '../products/filterProducts';

export default function products(req, { engine, filters, sorting, root }) {

    const context = {
        products: sortProducts(
            filterProducts(dataset, { filters }),
            {
                sortBy: sorting
            }
        ),
        filters,
        sorting,
    };

    root.innerHTML = engine.renderFileSync('products', context);

    document.getElementById('products-sorting').addEventListener('change', function onSortingChange(event) {
        setState({
            sorting: event.target.value || null
        });
        root.dispatchEvent(new Event("rerender"));
    });

    document.getElementById('products-category-filter').addEventListener('change', function onCategoryChange(event) {
        setState((currentState) => {
            const filters = currentState.filters || {};
            filters.category = event.target.value || null;
            return {
                ...currentState,
                filters
            };
        });
        root.dispatchEvent(new Event("rerender"));
    });

    document.getElementById('products-tag-filter').addEventListener('change', function onTagChange(event) {
        setState((currentState) => {
            const filters = currentState.filters || {};
            filters.tag = event.target.value || null;
            return {
                ...currentState,
                filters
            };
        });
        root.dispatchEvent(new Event("rerender"));
    });

    document.getElementById('products-min-price-filter').addEventListener('blur', function onPriceMinChange(event) {
        setState((currentState) => {
            const filters = currentState.filters || {};
            filters.priceMin = parseFloat(event.target.value) || null;
            return {
                ...currentState,
                filters
            };
        });
        root.dispatchEvent(new Event("rerender"));
    });

    document.getElementById('products-max-price-filter').addEventListener('blur', function onPriceMaxChange(event) {
        setState((currentState) => {
            const filters = currentState.filters || {};
            filters.priceMax = parseFloat(event.target.value) || null;
            return {
                ...currentState,
                filters
            };
        });
        root.dispatchEvent(new Event("rerender"));
    });
}