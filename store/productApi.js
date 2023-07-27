import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://mock.shop/api` }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        `?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}`,
    }),
    getSingleProduct: builder.query({
      query: (id) =>
        `https://mock.shop/api?query={product(id:%20%22${id}%22){title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount}}}}}}`,
    }),
    getCollectionWithProducts: builder.query({
      query: (id) =>               
        `https://mock.shop/api?query=%7B%20collection(id%3A%20%22${id}%22)%20%7B%20products(first%3A%2010)%20%7B%20edges%20%7B%20node%20%7B%20id%20title%20description%20images(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20url%20%7D%20%7D%20%7D%20variants(first%3A%201)%20%7B%20edges%20%7B%20node%20%7B%20price%20%7B%20amount%20currencyCode%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%20%7D%7D`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetCollectionWithProductsQuery,
} = productApi;
