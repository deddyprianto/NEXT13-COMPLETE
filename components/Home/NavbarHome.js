'use client';
import { useState } from 'react';

export default function NavbarHome({ data }) {
  const [saveIdCategory, setSaveIdCategory] = useState('');
  console.log(saveIdCategory);
  return (
    <div class='flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700'>
      {data.map((item) => (
        <button
          key={item?.name}
          onClick={() => setSaveIdCategory(item?.id)}
          className='inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none'
        >
          {item?.name}
        </button>
      ))}
    </div>
  );
}
