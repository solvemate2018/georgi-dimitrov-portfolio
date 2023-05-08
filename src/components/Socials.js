import React from 'react'
import { socials } from '../data';

export const Socials = (props) => {
    return (
        <ul className='flex space-x-7 '>
          {socials.map((item, index) => {
            return (
              <li
                className={`flex justify-center items-center  ${props.color === "white" ? 'text-white' : 'text-cyan-600'}`}
                key={index}
              >
                <a className='text-base' href={item.href}>
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      );
}
