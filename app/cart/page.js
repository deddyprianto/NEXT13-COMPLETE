import Cart from '@/components/Cart';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  const resLoadCategory = await fetch(
    `http://localhost:3000/api/revalidate?tag=family&secret=${token.value}`,
    {
      next: {
        tags: ['family'],
      },
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
  try {
    const dataCart = await getData();
    return <Cart data={dataCart} />;
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data: {error.message}</div>;
  }
}
