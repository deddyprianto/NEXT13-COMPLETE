'use client';
import MyModal from './Cta/Popup';
import Card from './Card';

export default function Main({ data }) {
  return (
    <div className='h-full'>
      <div className='w-9/12 m-auto flex justify-between items-center mt-10'>
        <div className='font-semibold flex flex-wrap'>YOUR DATA ENTRY</div>
        <MyModal />
      </div>
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 ml-5 mr-5'>
        {data?.details?.map((item) => (
          <Card key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}
