import Cart from '@/components/Cart';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

async function getData(token) {
  const resLoadCategory = await fetch(
    `https://64a7ca17dca581464b84c889.mockapi.io/students/family`,
    {
      cache: 'no-store',
    }
  );

  // Check if the response status is OK
  if (!resLoadCategory.ok) {
    throw new Error(`Request failed with status: ${resLoadCategory.status}`);
  }

  // Extract and return the JSON data from the response
  const data = await resLoadCategory.json();
  return data;
}

export default async function CartSSR() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  const dataCart = await getData(token);
  return <Cart data={dataCart} />;
}
