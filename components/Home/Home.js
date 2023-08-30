'use client';
import Items from './Items';
import NavbarHome from './NavbarHome';
import Slider from './Slider';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { MapPinIcon } from '@heroicons/react/24/solid';

export default function Home({ data }) {
  const router = useRouter();
  const outletSelected = useSelector(
    (state) => state.dataPersist.outletSelected
  );
  const [saveIdCategory, setSaveIdCategory] = useState(data[0].id);
  const firstThreeItems = data.slice(0, 3);
  const remainingItems = data.slice(3);

  return (
    <div className='pb-16'>
      <Slider />
      <div
        className='text-blue-500 font-bold text-center w-full my-2 cursor-pointer text-sm flex items-center justify-center'
        onClick={() => router.push('/outlet')}
      >
        <MapPinIcon className='h-5 w-5' />
        {outletSelected?.name}
      </div>
      <NavbarHome
        setSaveIdCategory={setSaveIdCategory}
        saveIdCategory={saveIdCategory}
        firstThreeItems={firstThreeItems}
        remainingItems={remainingItems}
      />
      <Items saveIdCategory={saveIdCategory} />
    </div>
  );
}
