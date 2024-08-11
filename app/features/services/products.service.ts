import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://gist.githubusercontent.com/marcusbrandt/8507b74f6cc0247c9656a228cf0b3475/raw/ab549abf10dda781e4bdbe4bfbdf23edf6b10bae/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products.json',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
