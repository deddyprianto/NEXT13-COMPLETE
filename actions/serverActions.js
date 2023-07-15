'use server';
import { revalidateTag } from 'next/cache';

export const addProdToDatabase = async (e) => {
  const phoneNumber = e.get('phone')?.toString();
  if (!phoneNumber) return;
  const payload = {
    phoneNumber,
  };
  await fetch(
    'https://api-newmujicafe.proseller-demo.com/crm/api/customer/login/check-account',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  revalidateTag('check-account');
};
