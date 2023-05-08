import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-center'>
          <p className='text-white opacity-80 text-[15px]'>
            &copy; 2023 Georgi Dimitrov
          </p>
        </div>
      </div>
    </footer>
  );
};
