import { createContext, useReducer } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

// Action types
const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

// Reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const findProduct = state.find((item) => item.id === action.payload.id);

      if (findProduct) {
        return state.map((item) => {
          if (findProduct.id === item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [{ ...action.payload, quantity: 1 }, ...state];
      }
    }

    case ACTIONS.REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload);
    }

    default:
      return state;
  }
}

const CartProvider = (props) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  function addToCart(product) {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    // window.alert('Sepete Eklendi');
    toast.success('Sepete Eklendi!');
  }

  function removeFromCart(cartItemId) {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: cartItemId });
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
