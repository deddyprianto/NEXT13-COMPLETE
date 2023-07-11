'use client';
import toast from 'react-hot-toast';
import CardCta from './CardCta';
import { useFetchData } from '@/hooks/useFetchData';

export default function Cta() {
  const { data, isError, isLoading, mutate } = useFetchData('family');

  mutate();
  if (isError) {
    toast.error(`error ${isError.message}`);
  }
  return (
    <>
      {isLoading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <CardCta items={data} />
      )}
    </>
  );
}
