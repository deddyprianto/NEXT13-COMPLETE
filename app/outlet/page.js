import Home from '@/components/Outlets/Home';

async function getData() {
  const resLoadOutlets = await fetch(
    'https://api-ximenjie.proseller-demo.com/masterdata/api/outlets/load',
    {
      cache: 'no-store',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  return resLoadOutlets.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className='h-full w-full overflow-y-auto pl-[16px] pr-[16px] mt-5'>
      <Home data={data} />
    </div>
  );
}
