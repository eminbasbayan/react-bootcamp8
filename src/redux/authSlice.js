import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // { uid, email, fullName, role }
  loading: true, // Başlangıçta true - auth kontrolü yapılana kadar bekle
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    clearUser(state) {
      state.user = null;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export default authSlice;
