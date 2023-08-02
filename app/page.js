import Link from 'next/link';
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/constant';
export default function Page() {
  const cookieStore = cookies();
  const myCookie = cookieStore.get(COOKIE_NAME);
  if (!myCookie) {
    return (
      <div className='h-full w-full overflow-y-auto p-3'>
        <Link href='/login'>Dashboard</Link>
      </div>
    );
  } else {
    return (
      <div className='h-full w-full overflow-y-auto p-3'>
        <Link href='/'>Dashboard</Link>
      </div>
    );
  }
}
