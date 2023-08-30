import { useState } from 'react';

export default function RadioInput({ modifer, setModifiers }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    if (!selectedValue) {
      setSelectedValue(event.target.value);
      setModifiers((prevArray) => [...prevArray, modifer]);
    } else {
      setSelectedValue('');
      setModifiers((prevArray) => prevArray.slice(0, prevArray.length - 1));
    }
  };
  return (
    <>
      <div className='py-4 flex items-center'>
        <div
          className={`${
            selectedValue === modifer.name
              ? 'bg-[#f78730]'
              : 'bg-white border border-gray-400'
          } rounded-sm  w-5 h-5 flex flex-shrink-0 justify-center items-center relative`}
        >
          <input
            onChange={handleChange}
            checked={selectedValue === modifer.name}
            type='checkbox'
            className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
            value={modifer.name}
          />
          <div className='check-icon hidden text-white rounded-sm'>
            <svg
              className='icon icon-tabler icon-tabler-check'
              xmlns='http://www.w3.org/2000/svg'
              width={20}
              height={20}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M5 12l5 5l10 -10' />
            </svg>
          </div>
        </div>
        <div className='flex items-center ml-2'>
          <div>{modifer.name}</div>
          <div>{modifer.price}</div>
        </div>
      </div>
      <style>
        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
      </style>
    </>
  );
}
