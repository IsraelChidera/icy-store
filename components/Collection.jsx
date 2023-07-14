import React from 'react';
import collectionOne from '../public/images/stock-collection.svg';
import collectionTwo from '../public/images/stock-collection-two.svg';
import collectionThree from '../public/images/stock-collection-three.svg';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const Collection = () => {
    return (
        <section className='mx-auto max-w-6xl mt-20 pb-10'>
            <p className='text-xl'> Back in Stock</p>

            <div className='mt-6'>
                <div className='md:grid grid-cols-6 gap-x-4'>
                    <div style={{ background: "#f0f0f0" }} className='col-span-4 relative'>
                        <Image
                            src={collectionOne}
                            className='w-full'
                        />
                        <Link href="#" className='pl-4 py-3 inline flex space-x-1 items-center'>
                            <span> Bags </span>
                            <BsArrowRight />
                        </Link>
                    </div>

                    <div className='col-span-2 '>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <Image
                                    src={collectionTwo}
                                />
                                <Link href="#" className='pl-4 py-3 inline flex space-x-1 items-center'>
                                    <span> Bags </span>
                                    <BsArrowRight />
                                </Link>
                            </div>

                            <div style={{ background: "#f6f6f6" }} className='relative'>
                                <Image
                                    src={collectionThree}
                                />
                                <Link href="#" className='pl-4 py-3 inline flex space-x-1 items-center'>
                                    <span> Bags </span>
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