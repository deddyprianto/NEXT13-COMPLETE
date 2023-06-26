import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default async function Page() {
  return (
    <div className='h-screen w-screen grid grid-cols-15 gap-x-2 overflow-x-auto'>
      <Sidebar />
      <Main />
    </div>
  );
}
