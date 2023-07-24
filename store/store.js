import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
