import Cart from '@/components/Cart';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

async function getData(token) {
  const { signal } = new AbortController();
  const res = await fetch(
    'https://64a7ca17dca581464b84c889.mockapi.io/students/family',
    {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      signal,
    }
  );
  const data = await res.json();
  return data;
}

export default async function CartSSR() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  const data = await getData();
  return <Cart data={data} />;
}
