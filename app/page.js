import Home from '@/components/Home/Home';
import { COOKIE_NAME, ID_OUTLET } from '@/constant';
import { cookies } from 'next/headers';

async function getData() {
  const cookieStore = cookies();
  const idOutlet = cookieStore.get(ID_OUTLET);
  const resLoadCategory = await fetch(
    `https://api-ximenjie.proseller-demo.com/product/api/productpreset/loadcategory/webOrdering/${idOutlet.value}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        take: 500,
        skip: 0,
      }),
    }
  );

  return resLoadCategory.json();
}

async function getDataPromoBanner() {
  const resLoadPromoBanner = await fetch(
    'https://api-ximenjie.proseller-demo.com/masterdata/api/promobanners/load',
    {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    }
  );

  return resLoadPromoBanner.json();
}
async function getDataSettings() {
  const resLoadPromoBanner = await fetch(
    'https://api-ximenjie.proseller-demo.com/ordering/api/orderingsetting/webOrdering',
    {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
    }
  );

  return resLoadPromoBanner.json();
}

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);

  // 3 data fetching in Nextj13
  // SERVER SIDE RENDERING SSR (Cache: 'no-store')
  // STATIC SIDE GENERATION SSG (default is cache)
  // INCREMENTAL STATIC  GENERATION ISR (can use both SSR/SSG)
  const data = await getData();
  const dataPromoBanner = await getDataPromoBanner();
  const setting = await getDataSettings();
  return (
    <div className='h-full w-full overflow-y-auto pl-[16px] pr-[16px]'>
      <Home
        data={data.data}
        token={token}
        dataPromoBanner={dataPromoBanner.data}
        settingsWebordering={setting.data}
      />
    </div>
  );
}
