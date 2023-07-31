'use client'
import React, { useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCartItem, getTotalPrice, removeFromCart } from '@/store/cartSlice';

const CartItems = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalPrice())
    }, [cart, dispatch])

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    }

    const handleDecreaseQuantity = (item) => {
        dispatch(decreaseCartItem(item));
    }

    const handleIncreaseQuantity = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div className="mt-10">
            <div className="grid text-sm grid-cols-4 md:grid-cols-5 gap-x-4 border-b pb-4">
                <div style={{ color: "#121212" }} className="col-span-3">
                    <p> PRODUCT </p>
                </div>

                <div
                    style={{ color: "#121212" }}
                    className="col-span-1 flex justify-end md:justify-between items-center"
                >
                    <p className='md:block hidden'> QUANTITY </p>
                    <p> TOTAL </p>
                </div>
            </div>

            <div className="mt-10 ">
                {
                    cart.cartItems?.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 md:grid-cols-5 gap-x-4 my-10">
                            <div className="md:col-span-3 col-span-3 flex items-start space-x-2">
                                <img src={item?.productArray?.data?.product?.images?.edges[0].node.url} className='w-28 h-28' alt="product image added to cart" />
                                <div className='space-y-6 md:space-y-0 pt-2 md:pt-0'>
                                    <h3 className="text-sm"> {item?.productArray?.data?.product?.title} </h3>
                                    <p style={{ color: "#121212" }} className="hidden md:block pt-4 pr-6 text-xs">
                                        {" "}
                                        {item?.productArray?.data?.product?.description}
                                    </p>
                                    <div className="md:hidden flex items-center space-x-2">
                                        <div>
                                            <button className="border py-1 px-2 flex items-center space-x-12">
                                                <span onClick={() => handleDecreaseQuantity(item)}>-</span>

                                                <span className="text-sm"> {item.cartQuantity} </span>

                                                <span onClick={() => handleIncreaseQuantity(item)}> + </span>
                                            </button>
                                        </div>

                                        <button onClick={() => handleRemoveFromCart(item)}>
                                            <AiFillDelete />
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 col-span-1 flex items-center justify-end md:justify-between">
                                <div className="hidden md:flex items-center space-x-2">
                                    <div>
                                        <button className="border py-1 px-2 flex items-center space-x-12">
                                            <span onClick={() => handleDecreaseQuantity(item)}>-</span>

                                            <span className="text-sm"> {item.cartQuantity} </span>

                                            <span onClick={() => handleIncreaseQuantity(item)}> + </span>
                                        </button>
                                    </div>

                                    <button onClick={() => handleRemoveFromCart(item)}>
                                        <AiFillDelete />
                                    </button>

                                </div>

                                <div>
                                    <p className="text-sm"> ${item?.productArray?.data?.product?.variants?.edges[0]?.node?.price.amount * item.cartQuantity} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-end text-right mt-20 w-full">
                <div className="space-y-2">
                    <p className="text-xs"> ${cart.cartTotalAmount} </p>
                    <p style={{ fontSize: "10px" }}>
                        {" "}
                        Taxes and shipping calculated at checkout{" "}
                    </p>
                    <button className="py-2 text-sm bg-black text-white w-full">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItems