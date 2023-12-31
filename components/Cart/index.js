'use client';
import { useFetchData } from '@/hooks/useFetchData';

export default function Cart({ tokenVal }) {
  const { data, isLoading } = useFetchData({
    token: tokenVal.value,
    endpoint: 'getcart',
  });
  if (isLoading) {
    return <p className='text-center'>Please wait...</p>;
  }
  if (data?.status === 'NOTFOUND') {
    return <p className='text-center'>Your cart is empty</p>;
  }

  return (
    <div className='p-[16px] h-full overflow-y-auto'>
      {data?.data?.details?.map((item) => {
        return (
          <div
            key={item.id}
            className='flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg h-1/2 mt-2'
          >
            <div
              className='w-1/3 bg-cover'
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMfvMOVIqyMOsNQpXxFcWKgVIBlgTczksykoEijixRPviorEw7wJptQYbLwUxcZHEy5o&usqp=CAU",
              }}
            ></div>

            <div className='w-2/3 p-4 md:p-4'>
              <h1 className='text-xl font-bold text-gray-800 dark:text-white'>
                {item.product.name}
              </h1>

              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
              </p>

              <div className='flex mt-2 item-center'>
                <svg
                  className='w-5 h-5 text-gray-700 fill-current dark:text-gray-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>

                <svg
                  className='w-5 h-5 text-gray-700 fill-current dark:text-gray-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>

                <svg
                  className='w-5 h-5 text-gray-700 fill-current dark:text-gray-300'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>

                <svg
                  className='w-5 h-5 text-gray-500 fill-current'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>

                <svg
                  className='w-5 h-5 text-gray-500 fill-current'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                </svg>
              </div>

              <div className='flex justify-between mt-3 item-center'>
                <h1 className='text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl'>
                  SGD {item.retailPrice}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
