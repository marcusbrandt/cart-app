import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../features/types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (
      state: Product[],
      action: { type: string; payload: Product },
    ) => {
      const product = action.payload;
      if (!state.find((item) => item.id === product.id)) {
        state.push(product);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item: Product) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
