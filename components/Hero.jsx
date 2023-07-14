import React from 'react';
import heroBg from '../public/images/hero-bg.svg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section>
            <div className='hero-wrapper'>
                <div className='mx-auto w-1/2 flex justify-center items-center h-screen'>
                    <div className='text-white text-center space-y-2'>
                        <p className='text-xs'> SUMMER 2023 </p>
                        <h1 className='text-7xl'> -30% Discount </h1>
                        <p className='text-base pb-6'> We know how large objects are expensive. Buy things on a small scale</p>
                        <Link className='border border-white px-4 py-2 text-base' href="#">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero