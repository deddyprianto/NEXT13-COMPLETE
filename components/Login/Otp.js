import axios from 'axios';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import ButtonLogin from './ButtonLogin';
import { setIsLogin } from '@/store/dataPersistedSlice';
import { useRouter } from 'next/navigation';

export default function Otp() {
  const router = useRouter();
  const dispatch = useDispatch();
  const phoneData = useSelector((state) => state.dataUser.dataPhoneNumber);
  const otpRef = useRef();

  const handleOtp = () => {
    const payload = {
      codeOTP: otpRef.current.value,
      phoneNumber: phoneData.phoneNumber,
    };
    const response = axios.post('/api/otp', payload, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    toast.promise(
      response,
      {
        loading: 'Loading',
        success: async ({ data }) => {
          if (data.message) {
            dispatch(setIsLogin(true));
            // dispatch(setAccessToken(data?.data?.accessToken.token));
            // await axios.post('/api/otp', payload);
            router.push('/outlet');
          }
          return `${data?.message}`;
        },
        error: (err) => {
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
    <div className='mt-5'>
      <form>
        <input
          ref={otpRef}
          type='text'
          placeholder='Put OTP Number'
          name='phone'
          className='ml-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
        />
      </form>
      <ButtonLogin handleCheckAccount={handleOtp} label='Continue' />
    </div>
  );
}
