import Link from 'next/link'
import React from 'react'

const Categories = () => {
    return (
        <section className='mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <h2 className='font-bold text-xl'>
                    YOUR FAVOURITE COLLECTION
                </h2>
                <p className='text-sm'>
                    We give obsessive attention with an intelligent effort.
                </p>
            </div>

            <div className='mt-10 w-3/4 mx-auto '>
                <div className='md:grid grid-cols-4 gap-x-4 '>
                    <div className='collection-one col-span-2 relative'>

                        <Link className='bg-white text-black absolute bottom-10 left-8 px-4 py-2 text-xs' href="#">
                            Shop Now
                        </Link>

                    </div>

                    <div className='collection-two relative'>
                        <Link className='bg-white text-black absolute bottom-10 left-8 px-4 py-2 text-xs' href="#">
                            Shop Now
                        </Link>
                    </div>

                    <div className='flex flex-col justify-between items-'>
                        <div className='collection-three relative'>
                            <Link className='bg-white text-black absolute bottom-8 left-6 px-4 py-2 text-xs' href="#">
                                Shop Now
                            </Link>
                        </div>

                        <div className='collection-four relative'>
                            <Link className='bg-white text-black absolute bottom-8 left-6 px-4 py-2 text-xs' href="#">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories