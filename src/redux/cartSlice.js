import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  totalValue: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findProduct) {
        state.cartItems = state.cartItems.map((item) => {
          if (findProduct.id === item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.cartItems = [
          { ...action.payload, quantity: 1 },
          ...state.cartItems,
        ];
      }

      toast.success(`${action.payload.title} ürünü sepete eklendi!`, {
        position: 'bottom-right',
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      toast.success(`Ürün başarıyla sepetten silindi!`, {
        position: 'top-center',
      });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;
