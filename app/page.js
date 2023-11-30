import Home from '@/components/Home/Home';
import { COOKIE_NAME} from '@/constant';
import { cookies } from 'next/headers';

async function getDataPromoBanner() {
  const resLoadPromoBanner = await fetch(
    'https://api-ximenjie.proseller-demo.com/masterdata/api/promobanners/load',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
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
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  return resLoadPromoBanner.json();
}

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);

  // 3 data fetching in Nextj13 PRE-RENDERING
  // SERVER SIDE RENDERING SSR (Cache: 'no-store')
  // STATIC SIDE GENERATION SSG (default is cache)
  // INCREMENTAL STATIC  GENERATION ISR (can use both SSR/SSG)
  const dataPromoBanner = await getDataPromoBanner();
  const setting = await getDataSettings();
  return (
    <div className='h-full w-full overflow-y-auto pl-[16px] pr-[16px]'>
      <Home
        token={token}
        dataPromoBanner={dataPromoBanner.data}
        settingsWebordering={setting.data}
      />
    </div>
  );
}
