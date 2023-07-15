import { useRef, useTransition } from 'react';
import DropDownLogin from './DropDownLogin';
import { checkUserHasBeenRegister } from '@/actions/serverActions';

export default function InputLogin() {
  let [isPending, startTransition] = useTransition();
  const phoneNumberRef = useRef();

  // const handleCheckAccount = async () => {
  //   const payload = {
  //     phoneNumber: phoneNumberRef.current.value,
  //   };
  //   const response = await axios.post(
  //     'https://api-newmujicafe.proseller-demo.com/crm/api/customer/login/check-account',
  //     payload,
  //     {
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     }
  //   );
  //   console.log(response);
  // };
  return (
    <div className='mt-7'>
      <div className='mt-2 flex items-center'>
        <DropDownLogin />
        <input
          ref={phoneNumberRef}
          type='text'
          placeholder='Phone Number'
          name='phone'
          className='ml-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
        />
      </div>

      <button
        onClick={() =>
          startTransition(() =>
            checkUserHasBeenRegister(phoneNumberRef.current.value)
          )
        }
        className='inline-flex justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full mt-4'
      >
        {isPending ? 'Loading' : 'next'}
      </button>
    </div>
  );
}
