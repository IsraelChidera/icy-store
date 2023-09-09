import Link from 'next/link'
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='md:flex items-center justify-between mx-auto max-w-6xl pb-2 mt-10'>
            <p className='md:text-sm md:text-left text-center text-xs'>
                &copy; 2023 Iccy Store
            </p>

            <div className='pt-2 md:pt-0'>
                <Link prefetch href="#" className='flex justify-center md:justify-between space-x-2 md:items-center text-xs underline underline-offset-4'>
                    <span>
                        Made with
                    </span>{' '}
                    <AiFillHeart />
                    {' '}
                    <span>
                        by Israel Chidera
                    </span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer