import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import RadioInput from './RadioInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function GeneralItemDetail({ setIsOpen, selectedProduct }) {
  const selectedOutlet = useSelector(
    (state) => state.dataPersist.outletSelected
  );

  const [modifiers, setModifiers] = useState([]);

  const handleAddItem = async () => {
    const payload = {
      details: modifiers,
      orderingMode: 'TAKEAWAY',
      outletID: selectedOutlet.id,
    };
    console.log(payload);
  };
  return (
    <div className='grid grid-rows-16 h-full'>
      <div className='px-[16px] h-full fo nt-semibold overflow-y-auto'>
        <div className='w-full flex justify-end mt-2'>
          <XMarkIcon
            onClick={() => setIsOpen(false)}
            className='w-7 h-7 text-white bg-orange-400 rounded-lg cursor-pointer'
          />
        </div>
        <div className='h-72 relative w-full'>
          <Image
            src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
            placeholder='blur'
            blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
            fill={true}
            alt='image data url'
          />
        </div>
        <div className='w-full flex justify-between items-center mt-2'>
          <h1>{selectedProduct?.product.name}</h1>
          <h1 className='text-[#f78730]'>
            {selectedProduct?.product.retailPrice}
          </h1>
        </div>
        {/* modifer */}
        <div className='mt-10'>
          <h1>
            {selectedProduct?.product?.productModifiers?.map((item) => {
              return (
                <div key={item?.id}>
                  <div className='flex items-center'>
                    <div>{item.modifierName}</div>
                    <div className='flex items-center text-[12px] ml-4 font-normal opacity-60'>
                      <h1>Min {item.modifier.min}</h1>
                      <h1 className='ml-1'>Max {item.modifier.max}</h1>
                    </div>
                  </div>
                  {/* item modifer */}
                  <div className='mt-2 font-normal text-sm'>
                    {item?.modifier?.details?.map((modifer) => {
                      return (
                        <RadioInput
                          key={item.id}
                          modifer={modifer}
                          setModifiers={setModifiers}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </h1>
        </div>
      </div>
      <div className='w-full bg-[#D0D0D0] p-2 flex items-center justify-center'>
        <button
          onClick={handleAddItem}
          className='bg-[#F7872F] w-full py-2 rounded-lg text-white'
        >
          Add Item lol
        </button>
      </div>
    </div>
  );
}
