'use client';
import axios from 'axios';
import useSWR from 'swr';

export default function Cart({ tokenVal }) {
  const { data, isLoading, error, mutate } = useSWR(
    `https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart`,
    (url) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${tokenVal.value}`,
          },
        })
        .then((res) => res.data),
    {
      errorRetryInterval: 300000,
      revalidateOnFocus: false,
      onError: (error) => {
        console.error(error);
        // Handle error here
      },
    }
  );
  return (
    <div className='p-[16px] h-full overflow-y-auto'>
      {data?.data.details?.map((item) => {
        return (
          <div
            key={item.id}
            className='flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg h-1/2 mt-2'
          >
            <div
              class='w-1/3 bg-cover'
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
                <button className='px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
