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
        // `https://mock.shop/api?query={collection(id:%20%22${id}%22){products(first:%2010){edges%20{node%20{title%20description%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}}`,
        `https://mock.shop/api?query={collection(id:%20%22${id}%22){products(first:%2010){edges%20{node%20{title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}}`
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetCollectionWithProductsQuery,
} = productApi;
