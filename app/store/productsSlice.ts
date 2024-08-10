// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../features/types';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts: (state: Products[], action) => {
      return action.payload;
    },
    refreshProducts: (state: Products[], action) => {
      return action.payload;
    },
  },
});

export const { addProducts, refreshProducts } = productsSlice.actions;
export default productsSlice.reducer;
