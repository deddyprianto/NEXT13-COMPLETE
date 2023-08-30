'use client';
import { setOutletSelected } from '@/store/dataPersistedSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function Home({ data }) {
  const dispatch = useDispatch();

  const router = useRouter();
  const handleClickOutlet = async (id, item) => {
    const payload = {
      idOutlet: id,
    };
    dispatch(setOutletSelected(item));
    await axios.post('/api/idoutlet', payload);
    router.push('/');
  };
  return (
    <>
      {data.data.map((item) => {
        return (
          <div
            onClick={() => handleClickOutlet(item.id, item)}
            className={`${
              item.orderingStatus === 'UNAVAILABLE'
                ? 'bg-[#F3F6F7] pointer-events-none cursor-not-allowed opacity-50'
                : 'bg-white cursor-pointer'
            } p-[12px] border border-[#CDCDCD] mt-2 rounded-md text-[#f78730] font-bold flex items-center`}
            key={item.id}
          >
            <div
              className={`rounded-lg p-1 mr-1 text-white font-normal text-sm ${
                item.orderingStatus === 'UNAVAILABLE'
                  ? 'bg-red-500'
                  : 'bg-green-500'
              }`}
            >
              {item.orderingStatus === 'UNAVAILABLE' ? 'close' : 'open'}
            </div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </>
  );
}
