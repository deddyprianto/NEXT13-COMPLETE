import Cart from '@/components/Cart';
import { COOKIE_NAME } from '@/constant';

import { cookies } from 'next/headers';

async function getData() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  const resLoadCategory = await fetch(
    `https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart`,
    {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  return resLoadCategory.json();
}
export default async function CartSSR() {
  const dataCart = await getData();
  return <Cart data={dataCart} />;
}
