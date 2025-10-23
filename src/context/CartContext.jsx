import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const findProduct = cartItems.find((item) => item.id === product.id);

    if (findProduct) {
      const newCartItems = cartItems.map((item) => {
        if (findProduct.id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([{ ...product, quantity: 1 }, ...cartItems]);
    }
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
