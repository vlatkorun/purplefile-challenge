export default function productPrice({ price }) {
    return price ? `${price}€` : 'Price not available';
}