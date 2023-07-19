'use client';
import Link from 'next/link';
import {
  DocumentDuplicateIcon,
  InboxIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const RenderRootComponents = ({ isLogin }) => {
  if (isLogin) {
    return (
      <div className='w-full flex justify-evenly items-center bg-gray-200'>
        <Link href='/' className='flex justify-center items-center flex-col'>
          <DocumentDuplicateIcon className='h-6 w-6' />
          <p>Menu</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <InboxIcon className='h-6 w-6' />
          <p>History</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <InboxIcon className='h-6 w-6' />
          <p>Inbox</p>
        </Link>
        <Link
          href='/login'
          className='flex justify-center items-center flex-col'
        >
          <ArrowRightOnRectangleIcon className='h-6 w-6' />
          <p>Profile</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className='w-full flex justify-evenly items-center bg-gray-200'>
        <Link href='/' className='flex justify-center items-center flex-col'>
          <DocumentDuplicateIcon className='h-6 w-6' />
          <p>Menu</p>
        </Link>
        <Link href='/cta' className='flex justify-center items-center flex-col'>
          <InboxIcon className='h-6 w-6' />
          <p>TrackOrder</p>
        </Link>
        <Link
          href='/login'
          className='flex justify-center items-center flex-col'
        >
          <ArrowRightOnRectangleIcon className='h-6 w-6' />
          <p>Login</p>
        </Link>
      </div>
    );
  }
};
export default function Footer() {
  const isLogin = useSelector((state) => state.dataPersist.isLogin);
  return <RenderRootComponents isLogin={isLogin} />;
}
