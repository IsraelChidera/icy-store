import Image from 'next/image';
import React from 'react';
import productOne from '../public/images/productOne.svg';
import productTwo from '../public/images/productTwo.svg';
import productThree from '../public/images/productThree.svg';
import productFour from '../public/images/productFour.svg';
import productFive from '../public/images/productFive.svg';
import productSix from '../public/images/productSix.svg';
import productSeven from '../public/images/productSeven.svg';
import productEight from '../public/images/productEight.svg';
import productNine from '../public/images/productNine.svg';
import Link from 'next/link';
const FeaturedProducts = () => {
    return (
        <section className='mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <p className='text-sm'>
                    Featured Products
                </p>
                <h2 className='font-bold text-xl'>
                    BESTSELLER PRODUCTS
                </h2>
            </div>

            <div className='mt-14 mx-auto max-w-6xl'>
                <div className='md:grid grid-cols-4 gap-x-2 gap-y-10'>
                    <Link href="/product">
                        <Image
                            src={productOne}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </Link>

                    <div>
                        <Image
                            src={productTwo}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Bo Soft Strap</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $365.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productThree}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productFour}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productFive}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs flex items-center space-x-2' style={{ color: "#121212" }}>
                            <span style={{ fontSize: "11px" }} className='line-through'>
                                $545.00 CAD
                            </span>

                            <span>
                                $195.00 CAD
                            </span>
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productSix}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Bo Soft Strap</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $365.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productSeven}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Bo Soft Strap</p>
                        <p className='text-xs flex items-center space-x-2' style={{ color: "#121212" }}>
                            <span style={{ fontSize: "11px" }} className='line-through'>
                                $545.00 CAD
                            </span>

                            <span>
                                $195.00 CAD
                            </span>
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productEight}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Storml </p>
                        <p className='text-xs ' style={{ color: "#121212" }}>
                            <span>
                                $195.00 CAD
                            </span>
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productNine}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productOne}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productTwo}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Bo Soft Strap</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $365.00 CAD
                        </p>
                    </div>

                    <div>
                        <Image
                            src={productThree}
                            alt="picture of a projec"
                        />
                        <p className='text-xs pt-2' style={{ color: "#121212" }}> Hobo Small</p>
                        <p className='text-xs' style={{ color: "#121212" }}>
                            $195.00 CAD
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts