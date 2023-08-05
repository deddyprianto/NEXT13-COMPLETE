import { useFetchDataProduct } from '@/hooks/useFetchDataProduct';
import CardProduct from './CardProduct';

export default function Items() {
  const { data, isError, isLoading } = useFetchDataProduct({
    methodAPI: 'POST',
    endPoint: '2046fd47-75f3-4af3-a11a-745e1f53cc73/1675306331197?page=2',
  });
  console.log(data);
  return (
    <div className='mt-10'>
      {data?.data.map((items) => {
        return <CardProduct key={items.id} data={items} />;
      })}
    </div>
  );
}
