'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav class='relative bg-white shadow dark:bg-gray-800'>
      <div class='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
        <div class='flex items-center justify-between'>
          <img
            class='w-auto h-6 sm:h-7'
            src='https://merakiui.com/images/full-logo.svg'
            alt=''
          />
          <div class='flex lg:hidden'>
            <button
              onClick={() => setOpen(!open)}
              type='button'
              class='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
            >
              <svg
                x-show='!isOpen'
                xmlns='http://www.w3.org/2000/svg'
                class='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4 8h16M4 16h16'
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          class={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            !open ? 'hidden' : 'bg-gray-800'
          } `}
        >
          <div class='flex flex-col md:flex-row md:mx-6'>
            <Link
              onClick={() => setOpen(false)}
              class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/history'
            >
              History
            </Link>
            <Link
              onClick={() => setOpen(false)}
              class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/shop'
            >
              Shop
            </Link>
            <Link
              onClick={() => setOpen(false)}
              class='my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
              href='/blog/123'
            >
              Blog
            </Link>
          </div>

          <div class='flex justify-center md:block'>
            <a
              class='relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
              href='#'
            >
              <svg
                class='w-5 h-5'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <span class='absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full'></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
