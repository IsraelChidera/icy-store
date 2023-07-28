'use client'

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getCartItemsFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    return cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [];
  } else {
    return [];
  }
};


const initialState = {
  cartItems: getCartItemsFromLocalStorage(),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.productArray?.data?.product?.title ===
          action.payload?.productArray?.data?.product?.title
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `🦄 ${state.cartItems[itemIndex].productArray?.data?.product?.title} quantity increased`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `🦄 ${action.payload?.productArray?.data?.product?.title} added to cart`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) =>
          item.productArray?.data?.product?.title !==
          action.payload?.productArray?.data?.product?.title
      );

      state.cartItems = newItems;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(
        `${action.payload?.productArray?.data?.product?.title} deleted successfully`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.productArray?.data?.product?.title ===
          action.payload?.productArray?.data?.product?.title
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Cart updated successfully`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newItems = state.cartItems.filter(
          (item) =>
            item.productArray?.data?.product?.title !==
            action.payload?.productArray?.data?.product?.title
        );
        state.cartItems = newItems;
        toast.error(
          `${action.payload?.productArray?.data?.product?.title} removed successfully`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotalPrice: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const price =
            cartItem.productArray.data.product.variants.edges[0].node.price
              .amount;
          const cartQuantity = cartItem.cartQuantity;
          //{price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;
          console.log(price, cartQuantity);

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCartItem, getTotalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
