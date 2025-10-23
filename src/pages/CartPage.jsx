import { useContext } from 'react';
import Header from '../components/Layout/Header';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/Products/ProductCard';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalValue = cartItems.reduce((toplam, element) => {
    return element.price * element.quantity + toplam;
  }, 0);

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

      <p className="my-10 text-2xl font-bold">
        Sepet Toplam: {totalValue.toFixed(2)}{' '}
      </p>
    </div>
  );
};

export default CartPage;
