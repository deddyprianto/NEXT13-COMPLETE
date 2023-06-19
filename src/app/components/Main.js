'use client';
import MyModal from './MyModal';
import { useSelector } from 'react-redux';

export default function Main({ data }) {
  const token = useSelector((state) => state);
  console.log(token);
  return (
    <div className='h-full overflow-x-auto'>
      <div className='w-9/12 m-auto flex justify-between items-center mt-10'>
        <div className=' font-semibold'>YOUR DATA ENTRY</div>
        <MyModal />
      </div>
      <div className='mt-5 grid grid-cols-2 gap-5'>
        {/* {data.map((item) => (
          <Card key={item.id} items={item} />
        ))} */}
      </div>
      {/* <input
        className='mt-10 border-2 w-56'
        onChange={(e) => dispatch(setDataInput(e.target.value))}
        value={inputan}
      />
      <p>{inputan}</p> */}
    </div>
  );
}
