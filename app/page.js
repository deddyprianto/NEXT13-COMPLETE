import Home from '@/components/Home/Home';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

async function getData() {
  const cookieStore = cookies();
  const myToken = cookieStore.get(COOKIE_NAME);
  const resLoadCategory = await fetch(
    'https://api-ximenjie.proseller-demo.com/product/api/productpreset/loadcategory/webOrdering/2046fd47-75f3-4af3-a11a-745e1f53cc73',
    {
      headers: {
        Authorization: `Bearer ${myToken?.value}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return resLoadCategory.json();
}

export default async function Page() {
  // 3 data fetching in Nextj13
  // SERVER SIDE RENDERING SSR (Cache: 'no-store')
  // STATIC SIDE GENERATION SSG (default is cache)
  // INCREMENTAL STATIC  GENERATION ISR (can use both SSR/SSG)
  const data = await getData();
  return (
    <div className='h-full w-full overflow-y-auto p-3'>
      <Home data={data.data} />
    </div>
  );
}
