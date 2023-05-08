import React from 'react'
import { Link } from 'react-scroll';
import { navigation } from '../data';

export const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, id) => {
          return (
            <li
              className='text-white hover:text-cyan-600 cursor-default'
              key={id}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}