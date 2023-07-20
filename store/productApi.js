import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/`}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`
        }),
        getFeaturedProducts: builder.query({
            query: () => `products?limit=12`
        })
    })
})

export const { useGetAllProductsQuery, useGetFeaturedProductsQuery } = productApi