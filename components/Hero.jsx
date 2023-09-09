'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section>
            <div className='hero-wrapper'>
                <div className='mx-auto md:w-1/2 w-3/4 flex justify-center items-center h-screen'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                        exit={{ opacity: 0, y: 20 }}
                        className='text-white text-center space-y-2'
                    >
                        <p className='text-xs'> SUMMER 2023 </p>
                        <h1 className='text-6xl md:text-7xl'> -30% Discount </h1>
                        <p className='text-xs md:text-base pb-6'> We know how large objects are expensive. Buy things on a small scale</p>
                        <Link prefetch className='border text-xs md:text-base border-white px-4 py-2 ' href="/products">
                            Shop Now
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero