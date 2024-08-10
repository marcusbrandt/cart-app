import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './productsSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
