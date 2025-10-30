import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import cartSlice from './cartSlice';
import authSlice from './authSlice';


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
