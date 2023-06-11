'use client';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setDataInput } from '../store/dataSlice';

export default function Main() {
  const dispatch = useDispatch();
  const inputan = useSelector((state) => state.testredux.inputdata);

  return (
    <div className='h-full overflow-x-auto'>
      <h1 className='text-center mt-10 font-semibold'>YOUR DATA ENTRY</h1>
      <div className='mt-5 grid grid-cols-2 gap-5'>
        <Card />
      </div>
      <input
        className='mt-10 border-2 w-56'
        onChange={(e) => dispatch(setDataInput(e.target.value))}
        value={inputan}
      />
      <p>{inputan}</p>
    </div>
  );
}
