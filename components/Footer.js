'use client';
import Link from 'next/link';
import {
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  EnvelopeIcon,
  InboxIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setDataPhoneNumber, setPhoneCode } from '@/store/dataSlice';

const RenderRootComponents = ({ isLogin, handleLogout }) => {
  if (isLogin) {
    return (
      <div className='w-full flex justify-evenly items-center bg-[#008AC9] text-[#ffffff]'>
        <Link href='/' className='flex justify-center items-center flex-col'>
          <DocumentDuplicateIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>Menu</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <ClockIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>History</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <EnvelopeIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>Inbox</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <EnvelopeIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>Inbox</p>
        </Link>
        <div
          onClick={handleLogout}
          className='flex justify-center items-center flex-col'
        >
          <UserCircleIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>LogOut</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='w-full flex justify-evenly items-center bg-[#008AC9] text-[#ffffff]'>
        <Link href='/' className='flex justify-center items-center flex-col'>
          <DocumentDuplicateIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>Menu</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <InboxIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>TrackOrder</p>
        </Link>
        <Link
          href='/login'
          className='flex justify-center items-center flex-col'
        >
          <ArrowLeftOnRectangleIcon className='h-5 w-5' />
          <p style={{ fontSize: '14px' }}>Login</p>
        </Link>
      </div>
    );
  }
};
export default function Footer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.dataPersist.isLogin);
  const handleLogout = async () => {
    try {
      await axios.get('/api/logout');
      dispatch(setPhoneCode(false));
      dispatch(setDataPhoneNumber({}));
      router.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };
  return <RenderRootComponents isLogin={isLogin} handleLogout={handleLogout} />;
}
