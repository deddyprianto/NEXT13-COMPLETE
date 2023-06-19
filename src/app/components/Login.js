'use client';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setAccessToken } from '../store/dataPersistedSlice';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const emailRef = useRef();
  const passRef = useRef();

  const loginHandle = () => {
    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const dataPromis = axios.post(
      'https://my-backend-infra.mhaidarhanif.com/api/auth/login',
      payload
    );
    toast.promise(
      dataPromis,
      {
        loading: 'Loading',
        success: (data) => {
          dispatch(setAccessToken(data.data.accessToken));
          router.push('/main');
          return `Successfully saved login`;
        },
        error: (err) => {
          dispatch(setAccessToken(err.message));
          return `This just happened: ${err.message}`;
        },
      },
      {
        style: {
          minWidth: '250px',
          filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    );
  };
  return (
    <div className='w-2/6 shadow-2xl flex justify-center flex-col items-center p-5'>
      <div class='mb-6 w-full'>
        <label
          for='email'
          class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your email
        </label>
        <input
          ref={emailRef}
          type='email'
          id='email'
          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
          placeholder='name@flowbite.com'
          required
        />
      </div>
      <div class='mb-6 w-full'>
        <label
          for='password'
          class='block mb-2 text-sm font-medium text-gray-900 '
        >
          Your password
        </label>
        <input
          ref={passRef}
          type='text'
          id='password'
          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400'
          required
        />
      </div>
      <button
        onClick={loginHandle}
        class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </button>
    </div>
  );
}
