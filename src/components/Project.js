import React from 'react'

export const Project = (props) => {
  return (
    <div className='bg-white rounded-2xl w-72 h-72'>
        <p className='text-center text-lg font-monospace'>{props.project.title}</p>
        <a href={props.project.href}><img src={props.project.imageSrc} alt='' className='w-max h-40'/></a>
        <p className='text-base font-serif px-2'>{props.project.description}</p>
    </div>
  )
}
