import { useCart } from '../../context/CartContext';

function MenuItem({ item }) {
    const { addToCart } = useCart();

return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );

}
export default MenuItem;