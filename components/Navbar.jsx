'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
import {
    FaShoppingCart,
} from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const navbar = () => {

    const { cartTotalQuantity } = useSelector((state) => state.cart);
    console.log(cartTotalQuantity);

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Shop" },
    ]

    const path = usePathname();

    return (
        <>
            <nav className='mx-auto max-w-6xl px-2 md:px-2 pt-4 pb-4 grid grid-cols-2'>
                <div className='flex items-center space-x-20'>
                    <Link href="/" className='logo-span md:text-2xl text-sm'>
                        Iccy Store
                    </Link>

                    <ul className='hidden md:flex items-center space-x-4 justify-between text-sm'>

                        {links.map((link, i) => (
                            <li key={i}>
                                <Link href={link.href} className='relative'>
                                    {link.href === path && (
                                        <motion.span
                                            layoutId="underline"
                                            style={{height: "2px"}}
                                            className="absolute left-0 top-full block w-full bg-black"
                                        />
                                    )}
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex justify-end'>
                    <ul>
                        <li className='relative'>
                            <p className='absolute -top-2 -right-2 text-xs'>
                                {cartTotalQuantity > 0 && cartTotalQuantity}
                            </p>
                            <Link href="/cart">
                                <FaShoppingCart className='w-5 h-5' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar