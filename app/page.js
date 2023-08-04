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
  const resPromoBanner = await fetch(
    'https://api-ximenjie.proseller-demo.com/masterdata/api/promobanners/load',
    {
      headers: {
        Authorization: `Bearer ${myToken?.value}`,
        'Content-Type': 'application/json',
      },
    }
  );
  const data1 = resLoadCategory.json();
  const data2 = resPromoBanner.json();
  return {
    data1,
    data2,
  };
}

// async function getDataPromoBannerImage() {
//   const cookieStore = cookies();
//   const myToken = cookieStore.get(COOKIE_NAME);
//   const res = await fetch(
//     'https://api-ximenjie.proseller-demo.com/masterdata/api/promobanners/load',
//     {
//       headers: {
//         Authorization: `Bearer ${myToken?.value}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default async function Page() {
  // 3 data fetching in Nextj13
  // SERVER SIDE RENDERING SSR (Cache: 'no-store')
  // STATIC SIDE GENERATION SSG (default is cache)
  // INCREMENTAL STATIC  GENERATION ISR (can use both SSR/SSG)
  const data = await getData();
  console.log(data);
  return (
    <div className='h-full w-full overflow-y-auto p-3'>
      {/* <Home dataTabModifier={data.data} /> */}
    </div>
  );
}
