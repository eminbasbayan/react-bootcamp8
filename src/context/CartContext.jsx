import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([product, ...cartItems]);
  }

  function removeFromCart(cartItemId) {
    const filteredCartItems = cartItems.filter(
      (item) => item.id !== cartItemId
    );

    setCartItems(filteredCartItems);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
