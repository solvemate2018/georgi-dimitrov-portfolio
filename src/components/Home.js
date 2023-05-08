import React from 'react'

export const Home = () => {
    return (
        <section
            id='home'
            className='lg:h-[100vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center justify-evenly h-full pt-8'>
                    <img src='/profile.jpeg' alt='Profile' className='rounded-full h-72 w-72' />
                    <div>
                        <p className='text-white w-[40vw] font-serif text-2xl'>Computer Science graduate from Copenhagen School of Design and Technology with career interests in Frontend and Backend Development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
