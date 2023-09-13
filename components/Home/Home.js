'use client';
import Items from './Items';
import NavbarHome from './NavbarHome';
import Slider from './Slider';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { StateProvider } from '../StateContext';
import { initialState, reducer } from '@/helper/reducer';
import { setSettings } from '@/store/dataSlice';

export default function Home({
  data,
  token,
  dataPromoBanner,
  settingsWebordering,
}) {
  const dispatch = useDispatch();

  const isRefreshPage = useSelector((state) => state.dataUser.isRefreshPage);

  const router = useRouter();
  const outletSelected = useSelector(
    (state) => state.dataPersist.outletSelected
  );
  const [saveIdCategory, setSaveIdCategory] = useState(data[0].id);
  const firstThreeItems = data.slice(0, 3);
  const remainingItems = data.slice(3);

  useEffect(() => {
    // const filterOnlyLayout  = settingsWebordering.
    dispatch(setSettings(settingsWebordering));
  }, []);

  useEffect(() => {
    if (isRefreshPage) {
      window.location.reload();
    }
  }, [isRefreshPage]);

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <div className='pb-16'>
        <Slider dataPromoBanner={dataPromoBanner} />
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
        <Items saveIdCategory={saveIdCategory} token={token} />
      </div>
    </StateProvider>
  );
}
