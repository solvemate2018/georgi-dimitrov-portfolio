import React from 'react'

export const About = () => {
    return (
        <section
            id='about'
            className='lg:h-[100vh] flex items-center bg-gray-900 lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center justify-evenly h-full pt-8'>
                    <div>
                        <h1 className='text-white text-3xl font-monospace'>About me</h1>
                        <h1 className='text-white w-[40vw] font-serif text-xl'>Computer Science graduate from Copenhagen School of Design and Technology with career interests in Frontend and Backend Development.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
