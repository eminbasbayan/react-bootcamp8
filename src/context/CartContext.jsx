import { createContext } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
  const fullName = 'Emin Başbayan';

  return (
    <CartContext.Provider
      value={{
        fullName,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
