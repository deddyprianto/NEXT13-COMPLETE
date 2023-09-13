import { useState } from 'react';

export default function RadioInput({ modifier, setModifiers, modifierID }) {
  const [quantity, setQuantity] = useState(1);

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    if (!selectedValue) {
      setSelectedValue(event.target.value);
      setModifiers((prevArray) => [
        ...prevArray,
        {
          modifierID,
          modifier: {
            name: modifier.name,
            productID: modifier.productID,
            price: modifier.price,
          },
        },
      ]);
    } else {
      setSelectedValue('');
      setModifiers((prevArray) => prevArray.slice(0, prevArray.length - 1));
    }
  };

  // const renderQtyButton = () => {};

  return (
    <>
      <div className='py-2 flex items-center'>
        <div
          className={`${
            selectedValue === modifier.name
              ? 'bg-[#667080]'
              : 'bg-white border-[2px] border-[#666]'
          } rounded-sm  w-5 h-5 flex flex-shrink-0 justify-center items-center relative`}
        >
          <input
            onChange={handleChange}
            checked={selectedValue === modifier.name}
            type='checkbox'
            className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
            value={modifier.name}
          />
          <div className='check-icon hidden text-white rounded-sm'>
            <svg
              className='icon icon-tabler icon-tabler-check'
              xmlns='http://www.w3.org/2000/svg'
              width={20}
              height={20}
              viewBox='0 0 24 24'
              strokeWidth='2.5'
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
        <div className='pl-2'>
          <div className='text-[12px]'>{modifier.name}</div>
          <div className='text-[#8a8d8e] text-[10px]'>SGD {modifier.price}</div>
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
