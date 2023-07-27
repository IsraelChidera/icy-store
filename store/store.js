import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import productReducer from "./productSlice";
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,    
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
