'use client';
import { useSelector } from 'react-redux';

export default function ShopComponent() {
  const inputan = useSelector((state) => state.testredux.inputdata);
  return (
    <div>
      <p>{inputan}</p>
    </div>
  );
}
