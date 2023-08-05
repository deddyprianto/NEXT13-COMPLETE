'use client';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Bars4Icon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Header() {
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
        <ShoppingBagIcon className='h-8 w-8' />
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <RenderMenu />
      </Drawer>
    </div>
  );
}
