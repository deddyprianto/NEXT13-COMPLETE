import { useRef } from 'react';
import DropDownLogin from './DropDownLogin';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDataPhoneNumber, setPhoneCode } from '@/store/dataSlice';
import toast from 'react-hot-toast';
import ButtonLogin from './ButtonLogin';

export default function InputLogin() {
  const phoneCode = useSelector((state) => state.dataUser.dropDownPhoneCode);
  const dispatch = useDispatch();
  const phoneNumberRef = useRef();

  const handleCheckAccount = async () => {
    const payload = {
      phoneNumber: `${phoneCode}${phoneNumberRef.current.value}`,
    };
    const response = axios.post(
      'https://api-ximenjie.proseller-demo.com/crm/api/customer/login/check-account',
      payload,
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const payloadOTPSender = {
      phoneNumber: `${phoneCode}${phoneNumberRef.current.value}`,
      sendBy: 'SMSOTP',
      senderName: 'QARETAIL',
    };
    await axios.post(
      'https://api-ximenjie.proseller-demo.com/crm/api/customer/login/send-otp',
      payloadOTPSender,
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    toast.promise(
      response,
      {
        loading: 'Loading',
        success: ({ data }) => {
          dispatch(setDataPhoneNumber(data?.data?.data));
          dispatch(setPhoneCode(data?.data?.status));
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
      <ButtonLogin handleCheckAccount={handleCheckAccount} label='Next' />
    </div>
  );
}
