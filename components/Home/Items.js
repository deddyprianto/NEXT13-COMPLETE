import Image from 'next/image';
import React, { useCallback, useRef, useState } from 'react';
import { useInfiniteLoading } from '@/hooks/useInfiniteLoading';
import { AnimationLoading } from '../AnimationLoading';
import { ModalGeneral } from '../ModalGeneral';

export default function Items({ saveIdCategory }) {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const { dataResponse, isError, isLoading, setSize, size } =
    useInfiniteLoading(saveIdCategory);

  const observer = useRef();
  const lastEl = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSize((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, setSize]
  );
  const isLoadingMore =
    isLoading ||
    (size > 0 && dataResponse && typeof dataResponse[size - 1] === 'undefined');

  const renderItems = () => {
    return dataResponse?.map((itemsData) => {
      return itemsData?.data?.map((item, index) => {
        if (itemsData?.data?.length === index + 1) {
          return (
            <div
              ref={lastEl}
              key={item.id}
              className='grid w-full rounded-[16px] bg-[#f2f2f2] mt-4 border-[1px] border-[#80808080] h-52 grid-cols-16'
              style={{ boxShadow: 'rgba(128, 128, 128, 0.5) 0px 0px 5px' }}
            >
              <div className='text-black flex flex-col justify-between pb-4 pt-4 pl-4'>
                <div className='flex items-center'>
                  <div className='bg-orange-500 rounded-sm text-white w-5 h-5 text-center text-sm'>
                    3x
                  </div>
                  <p className='ml-2'>{item?.name}</p>
                </div>
                <div>SGD {item?.product?.retailPrice}</div>
              </div>
              {/* col 2 */}
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
                  placeholder='blur'
                  blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
                  width={80}
                  height={80}
                  alt='image data url'
                />
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setIsOpen(true);
                  }}
                  className='w-[80px] mx-2 my-2 bg-orange-500 transition duration-150 ease-in-out hover:bg-orange-500 rounded text-white px-6 py-1 text-xs'
                >
                  Add
                </button>
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={item.id}
              className='grid w-full rounded-[16px] bg-[#f2f2f2] mt-4 border-[1px] border-[#80808080] h-52 grid-cols-16'
              style={{ boxShadow: 'rgba(128, 128, 128, 0.5) 0px 0px 5px' }}
            >
              <div className='text-black flex flex-col justify-between pb-4 pt-4 pl-4'>
                <div className='flex items-center'>
                  <div className='bg-orange-500 rounded-sm text-white w-5 h-5 text-center text-sm'>
                    3x
                  </div>
                  <p className='ml-2'>{item?.name}</p>
                </div>
                <div>SGD {item?.product?.retailPrice}</div>
              </div>
              {/* col 2 */}
              <div className='flex flex-col justify-center items-center'>
                <Image
                  src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
                  placeholder='blur'
                  blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
                  width={80}
                  height={80}
                  alt='image data url'
                />
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setIsOpen(true);
                  }}
                  className='w-[80px] mx-2 my-2 bg-orange-500 transition duration-150 ease-in-out hover:bg-orange-500 rounded text-white px-6 py-1 text-xs'
                >
                  Add
                </button>
              </div>
            </div>
          );
        }
      });
    });
  };

  return (
    <React.Fragment>
      {renderItems()}
      {isLoadingMore && (
        <div className='w-full h-full flex justify-center items-center'>
          <AnimationLoading />
        </div>
      )}
      {isError && (
        <div className='w-full h-full flex justify-center items-center'>
          <p className='text-red-500 text-center'>{isError}</p>
        </div>
      )}
      <ModalGeneral
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        selectedProduct={selectedProduct}
      />
    </React.Fragment>
  );
}
