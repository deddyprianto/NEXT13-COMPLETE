'use client';
// import { useRouter } from 'next/navigation';
import { useRef } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { setAccessToken } from '../store/dataPersistedSlice';
// import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login({ data }) {
  // const dispatch = useDispatch();
  // const router = useRouter();
  const emailRef = useRef();
  const passRef = useRef();

  return (
    <div className='w-2/6 shadow-2xl flex justify-center flex-col items-center p-5'>
      <p className='text-xs'>{JSON.stringify(data)}</p>
      <div className='mb-6 w-full'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your email
        </label>
        <input
          ref={emailRef}
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          placeholder='name@flowbite.com'
          required
        />
      </div>
      <div className='mb-6 w-full'>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-900 '
        >
          Your password
        </label>
        <input
          ref={passRef}
          type='text'
          id='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400'
          required
        />
      </div>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        Submit
      </button>
    </div>
  );
}
