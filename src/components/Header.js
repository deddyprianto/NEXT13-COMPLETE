'use client';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Bars4Icon, ShoppingBagIcon } from '@heroicons/react/24/solid';

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
  const RenderLogo = () => {
    return (
      <img
        width={100}
        height={100}
        src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/bbbe9dbf-7a69-441d-964a-25688ab6dfe6/ordering_setting/6751e22d-131e-42f3-8d8b-89a014b68b8a.png'
        alt='prodImages'
      />
    );
  };

  return (
    <div>
      <div className='w-full flex justify-between items-center bg-gray-200 p-5'>
        <RenderHamburgerMenu />
        <RenderLogo />
        <ShoppingBagIcon className='h-8 w-8' />
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
        <RenderMenu />
      </Drawer>
    </div>
  );
}
