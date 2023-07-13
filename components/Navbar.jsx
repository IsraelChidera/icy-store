import Link from 'next/link'
import React from 'react';
import {
    FaShoppingCart,
} from 'react-icons/fa';
import {
    AiFillHeart,
} from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav>
            <h1>
                ICCY
            </h1>

            <ul>
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

            <div>
                <ul>
                    <li>
                        <Link href="#">
                            <FaShoppingCart />
                        </Link>
                    </li>

                    <li>
                        <Link href="#">
                            <AiFillHeart />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar