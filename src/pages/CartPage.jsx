import { useContext } from 'react';
import Header from '../components/Layout/Header';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/Products/ProductCard';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div className="cart-page">
      <Header />
      <h1>Cart Page</h1>
      <div className="products-wrapper">
        {cartItems.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            cart
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
