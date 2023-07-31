import React from 'react'

const Newsletter = () => {
    return (
        <section className='md:mx-auto mx-3 md:max-w-6xl mt-48 pb-20'>
            <div className='md:mx-auto md:w-1/2 text-center'>
                <h2 className='font-bold text-base sm:text-lg md:text-2xl'>
                    Subscribe To Our Newsletter
                </h2>

                <div className='mt-6 flex justify-center items-center space-x-6'>
                    <div className='w-full sm:w-3/4'>
                        <input
                            type="text"
                            placeholder='Email Address . . .'
                            className='md:text-sm text-xs py-2 pl-2 border-b focus:outline-none focus:border-b w-full'
                        />
                    </div>

                    <div>
                        <button className='border px-4 py-1 text-xs md:text-sm'>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter