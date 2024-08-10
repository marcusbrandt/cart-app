import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './productsSlice';
import cartSlice from './cartSlice';
import { productsApi } from '../features/services/products.service';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
