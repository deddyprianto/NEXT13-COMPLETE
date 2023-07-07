'use server';
import { revalidateTag } from 'next/cache';

export const addProdToDatabase = async (e) => {
  const name = e.get('name')?.toString();
  const address = e.get('address')?.toString();
  if (!name || !address) return;
  const payload = {
    name,
    address,
  };
  await fetch('https://64a7ca17dca581464b84c889.mockapi.io/students/family', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json',
    },
  });
  revalidateTag('family');
};
