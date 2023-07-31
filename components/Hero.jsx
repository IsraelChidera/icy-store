import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section>
            <div className='hero-wrapper'>
                <div className='mx-auto md:w-1/2 w-3/4 flex justify-center items-center h-screen'>
                    <div className='text-white text-center space-y-2'>
                        <p className='text-xs'> SUMMER 2023 </p>
                        <h1 className='text-6xl md:text-7xl'> -30% Discount </h1>
                        <p className='text-xs md:text-base pb-6'> We know how large objects are expensive. Buy things on a small scale</p>
                        <Link className='border text-xs md:text-base border-white px-4 py-2 text-base' href="/products">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero