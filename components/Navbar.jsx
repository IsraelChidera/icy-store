

import Link from 'next/link'
import React from 'react';
import {
    FaShoppingCart,
} from 'react-icons/fa';
import {
    AiFillHeart,
} from 'react-icons/ai';


const navbar = () => {
    return (
        <>
            <nav className='mx-auto max-w-6xl px-2 pt-4 pb-4 grid grid-cols-2'>
                <div className='flex items-center space-x-20'>
                    <h1 className='logo-span text-2xl'>
                        Iccy Store
                    </h1>

                    <ul className='flex items-center space-x-2 justify-between text-sm'>
                        <li>
                            <Link href="#">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                Shop
                            </Link>
                        </li>

                        <li>
                            <Link href="#">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end'>
                    <ul className='flex items-center space-x-10'>
                        <li className='relative'>
                            <p className='absolute -top-2 -right-2 text-xs'>
                                1
                            </p>
                            <Link href="#">
                                <FaShoppingCart className='w-5 h-5'/>
                            </Link>
                        </li>

                        <li className='relative'>
                            <p className='absolute -top-2 -right-2 text-xs'>
                                1
                            </p>
                            <Link href="#">
                                <AiFillHeart className='w-5 h-5'/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar