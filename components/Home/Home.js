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
import useSWR from 'swr';

export default function Home({
  dataRes,
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
  const [saveIdCategory, setSaveIdCategory] = useState(dataRes[0].id);
  const firstThreeItems = dataRes.slice(0, 3);
  const remainingItems = dataRes.slice(3);
  console.log(token);
  const fetcher = async (url) => {
    const response = await fetch(url, {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data.data;
  };

  const { data } = useSWR(
    'https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart',
    fetcher
  );

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
