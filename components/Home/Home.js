'use client';
import Items from './Items';
import NavbarHome from './NavbarHome';
import Slider from './Slider';
import { useState } from 'react';

export default function Home({ data }) {
  const [saveIdCategory, setSaveIdCategory] = useState(data[0].id);
  const firstThreeItems = data.slice(0, 3);
  const remainingItems = data.slice(3);
  return (
    <div className='pb-16'>
      <Slider />
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
