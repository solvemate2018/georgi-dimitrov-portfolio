import React from 'react'
import { projects } from '../data'
import { Project } from './Project'

export const Projects = () => {
    return (
        <section
            id='projects'
            className='lg:h-[100vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <p className='text-white text-center font-monospace text-3xl py-4'>Projects</p>
                <div className='flex flex-wrap justify-evenly h-full'>
                    {projects.map(project => {
                        return <Project project={project} />
                    })}
                </div>
            </div>
        </section>
    )
}
