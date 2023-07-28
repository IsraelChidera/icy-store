import Link from 'next/link';
import React from 'react';
import emptyCart from '../public/images/empty-cart.svg';
import Image from 'next/image';

const EmptyCart = () => {
    return (
        <section className='py-20'>
            <div className='mx-auto w-1/2'>
                <h3 className='text-2xl mt-4 text-center font-medium'>
                    Shopping Cart
                </h3>
                <p className='text-xs mt-2 space-x-2 text-center'>
                    <span style={{ color: "#8F8F8F" }}>
                        <Link href="/">
                            Home
                        </Link>
                    </span>
                    {" "}/
                    <span>
                        Shopping Cart
                    </span>

                </p>

                <div className='flex justify-center items-center mt-6'>
                    <Image src={emptyCart} alt="empty cart" className='w-48' />
                </div>

                <h3 className='text-2xl  mt-10 text-center '>
                    Your Cart is Currently Empty
                </h3>

                <p className='text-sm mt-1 text-center' style={{ color: "#666666" }}>
                    Browse our categories and discover your favourite product
                </p>

                <div className='flex mt-6 text-sm  justify-center items-center'>
                    <Link
                        href="/"                        
                        className='bg-black px-6 py-2 text-white'
                    >
                        Return to shop
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default EmptyCart