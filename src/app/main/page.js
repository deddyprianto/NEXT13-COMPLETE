import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import { cookies } from 'next/headers';

async function getData() {
  const res = await fetch('https://api.example.com/...');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Page() {
  // const cookieStore = cookies();
  // const data = await getData(cookieStore.get('next-auth.session-token').value);
  return (
    <div className='h-screen w-screen grid grid-cols-15 gap-x-2 overflow-x-auto'>
      <Sidebar />
      <Main />
    </div>
  );
}
