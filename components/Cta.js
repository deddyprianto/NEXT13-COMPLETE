'use client';
import toast from 'react-hot-toast';
import CardCta from './CardCta';
import useSWR from 'swr';
import axios from 'axios';
import { sortNewValue } from '@/helper/myfn';

export default function Cta() {
  const { data, isLoading, error, mutate } = useSWR(
    `https://64a7ca17dca581464b84c889.mockapi.io/students/family`,
    (url) =>
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((res) => res.data),
    {
      errorRetryInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  mutate();
  if (error) {
    toast.error(`error ${error.message}`);
  }
  const dataFinal = sortNewValue(data);
  return (
    <>
      {isLoading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        <CardCta items={dataFinal} />
      )}
    </>
  );
}
