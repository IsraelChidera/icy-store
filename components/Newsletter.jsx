import React from 'react'

const Newsletter = () => {
    return (
        <section className='mx-auto max-w-6xl mt-20 pb-10'>
            <div className='mx-auto w-1/2 text-center'>
                <h2 className='font-bold text-2xl'>
                    Subscribe To Our Newsletter
                </h2>

                <div className='mt-6 flex items-center space-x-6'>
                    <div className='w-full'>
                        <input
                            type="text"
                            placeholder='Email Address . . .'
                            className='text-sm py-2 pl-2 border-b focus:outline-none focus:border-b w-full'
                        />
                    </div>

                    <div>
                        <button className='border px-4 py-1 text-sm'>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter