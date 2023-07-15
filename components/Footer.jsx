import Link from 'next/link'
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='flex items-center justify-between mx-auto max-w-6xl pb-2 mt-10'>
            <p className='text-sm'>
                &copy; 2023 Iccy Store
            </p>

            <div>
                <Link href="#" className='flex justify-between space-x-2 items-center text-xs underline underline-offset-4'>
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