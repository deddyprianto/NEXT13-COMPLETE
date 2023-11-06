'use client';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Bars4Icon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector((state) => state.dataPersist.countCart);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const RenderMenu = () => {
    const data = ['Menu', 'TrackOrder', 'Login'];
    return (
      <ul className='w-full h-full p-1'>
        {data.map((item) => (
          <li className='m-5' key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  const RenderHamburgerMenu = () => {
    return <Bars4Icon onClick={toggleDrawer} className='h-6 w-6' />;
  };

  return (
    <div>
      <div className='w-full flex justify-between items-center bg-white p-5'>
        <RenderHamburgerMenu />
        <Image
          width={100}
          height={100}
          src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/d0c9765f-304f-4f0d-b812-9a49d3055824.png'
          alt='prodImages'
        />
        <div onClick={() => router.push('/cart')} className='relative'>
          {cartCount !== 0 && (
            <div className='m-0 p-0 absolute -top-1 -right-2 h-[20px] w-[20px] rounded-full bg-red-500 text-center text-white text-[10px] leading-[20px]'>
              <div>{cartCount}</div>
            </div>
          )}
          <ShoppingCartIcon className='h-8 w-8' />
        </div>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <RenderMenu />
      </Drawer>
    </div>
  );
}
