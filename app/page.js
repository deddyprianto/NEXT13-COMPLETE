import Card from '@/components/Card';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies();
  const myToken = cookieStore.get('mytoken');
  const res = await fetch(
    'https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart',
    {
      next: {
        revalidate: 10,
      },
      headers: {
        Authorization: `Bearer ${myToken?.value}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log('dedd', myToken.value);
  return (
    <div className='h-full w-full overflow-y-auto p-3'>
      <Card items={[]} />
    </div>
  );
}
