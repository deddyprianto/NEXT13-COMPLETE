import Home from '@/components/Home/Home';
import { COOKIE_NAME } from '@/constant';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return (
    <div className='h-full w-full overflow-y-auto pl-[16px] pr-[16px]'>
      <Home token={token} />
    </div>
  );
}
