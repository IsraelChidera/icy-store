import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productApi";
import productReducer from "./productSlice";
import cartReducer, { getTotalPrice } from './cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,    
    cart: cartReducer, 
    [productApi.reducerPath]: productApi.reducer,    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(getTotalPrice());
