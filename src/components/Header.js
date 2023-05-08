import React, { useEffect, useState } from 'react'

import { Nav } from './Nav'
import { NavMobile } from './NavMobile';
import { Socials } from './Socials';

export const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
    });
  
    return (
      <header
        className={`${
          bg ? 'bg-gray-900 h-14' : 'bg-black h-20'
        } flex items-center fixed top-0 w-full z-10 transition-all duration-300`}
      >
        <div className='container mx-auto h-full flex items-center justify-between'>
          <a href='/'>
            <p className='text-xl text-cyan-600 font-monospace underline underline-offset-8'>Georgi Dimitrov</p>
          </a>
          {/* nav */}
          <div className='hidden lg:block'>
            <Nav />
          </div>
          {/* Socials */}
          <div className='hidden lg:block'>
            <Socials />
          </div>
          {/* nav mobile*/}
          <div className='lg:hidden'>
            <NavMobile />
          </div>
        </div>
      </header>)
}
