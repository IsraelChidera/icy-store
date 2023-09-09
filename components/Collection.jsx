import React from 'react';
import collectionOne from '../public/images/stock-collection.svg';
import collectionTwo from '../public/images/stock-collection-two.svg';
import collectionThree from '../public/images/stock-collection-three.svg';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const Collection = () => {


    
    return (
        <section className='md:mx-auto mx-3 md:max-w-6xl mt-20 pb-10'>
            <p className='md:text-xl md:font-normal font-semibold'> Back in Stock</p>

            <div className='md:mt-6 mt-3'>
                <div className='md:grid grid-cols-6 md:space-y-0  space-y-2 gap-x-4'>
                    <div style={{ background: "#f0f0f0" }} className='col-span-4 relative'>                        
                        <Image
                            src={collectionOne}
                            className='w-full'
                            alt="product"
                        />
                        <Link prefetch href="/products" className='pl-4 py-3 flex space-x-1 items-center'>
                            <span className='md:text-base text-sm'> View collection </span>
                            <BsArrowRight />
                        </Link>
                    </div>

                    <div className='col-span-2 '>
                        <div className='flex md:flex-col space-x-2 md:space-x-0 justify-between'>
                            <div style={{ background: "#f6f6f6" }} className='md:block flex flex-col justify-end relative'>
                                <Image
                                    src={collectionTwo}
                                    alt="product collection"
                                />
                                <Link prefetch href="/products" className='pl-4 py-3 inline flex space-x-1 items-center'>
                                    <span className='md:text-base text-sm'> View collection </span>
                                    <BsArrowRight />
                                </Link>
                            </div>

                            <div style={{ background: "#f6f6f6" }} className='relative'>
                                <Image
                                    src={collectionThree}
                                    alt="product collection"
                                />
                                <Link prefetch href="/products" className='pl-4 py-3 inline flex space-x-1 items-center'>
                                    <span> View collection </span>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection