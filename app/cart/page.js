import Cart from '@/components/Cart';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

export default function CartPage() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return <Cart tokenVal={token} />;
}
