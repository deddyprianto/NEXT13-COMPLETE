import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import RadioInput from './RadioInput';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useStateValueContext } from './StateContext';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/helper/myfn';

export default function GeneralItemDetail({ setIsOpen, selectedProduct }) {
  const [{ tokenVal }, dispatchContext] = useStateValueContext();
  const router = useRouter();

  const setting = useSelector((state) => state.dataUser.setting);

  const selectedOutlet = useSelector(
    (state) => state.dataPersist.outletSelected
  );

  const [modifiers, setModifiers] = useState([]);

  const { data, mutate } = useSWR(
    'https://api-ximenjie.proseller-demo.com/ordering/api/cart/getcart',
    (url) => fetcher(url, tokenVal)
  );

  const handleAddToCart = async () => {
    const modiferGroupingMap = Object.values(
      modifiers.reduce((accumulator, item) => {
        if (!accumulator[item.modifierID]) {
          accumulator[item.modifierID] = {
            modifierID: item.modifierID,
            modifier: {
              details: [],
            },
          };
        }

        accumulator[item.modifierID].modifier.details.push({
          name: item.modifier.name,
          productID: item.modifier.productID,
          price: item.modifier.price,
          quantity: 1,
        });

        return accumulator;
      }, {})
    );

    const payload = {
      details: [
        {
          ...(modifiers.length > 0 && { modifiers: modiferGroupingMap }),
          productID: selectedProduct.productID,
          quantity: 3,
          remark: '',
          unitPrice: selectedProduct.product.retailPrice,
        },
      ],
      outletID: `outlet::${selectedOutlet.id}`,
    };

    try {
      const response = await fetch(
        'https://api-ximenjie.proseller-demo.com/ordering/api/cart/additem',
        {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${tokenVal.value}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleAddItem = async () => {
  //   // const finalFormats = Object.values(
  //   //   modifiers.reduce((accumulator, item) => {
  //   //     if (!accumulator[item.modifierID]) {
  //   //       accumulator[item.modifierID] = {
  //   //         modifierID: item.modifierID,
  //   //         modifer: {
  //   //           details: [],
  //   //         },
  //   //       };
  //   //     }

  //   //     accumulator[item.modifierID].modifer.details.push(
  //   //       item.modifer.details[0]
  //   //     );

  //   //     return accumulator;
  //   //   }, {})
  //   // );

  //   const modiferGroupingMap = Object.values(
  //     modifiers.reduce((accumulator, item) => {
  //       if (!accumulator[item.modifierID]) {
  //         accumulator[item.modifierID] = {
  //           modifierID: item.modifierID,
  //           modifier: {
  //             details: [],
  //           },
  //         };
  //       }

  //       accumulator[item.modifierID].modifier.details.push({
  //         name: item.modifier.name,
  //         productID: item.modifier.productID,
  //         price: item.modifier.price,
  //         quantity: 1,
  //       });

  //       return accumulator;
  //     }, {})
  //   );

  //   const payload = {
  //     details: [
  //       {
  //         ...(modifiers.length > 0 && { modifiers: modiferGroupingMap }),
  //         productID: selectedProduct.productID,
  //         quantity: 3,
  //         remark: '',
  //         unitPrice: selectedProduct.product.retailPrice,
  //       },
  //     ],
  //     outletID: `outlet::${selectedOutlet.id}`,
  //   };

  //   const response = axios.post(
  //     'https://api-ximenjie.proseller-demo.com/ordering/api/cart/additem',
  //     payload,
  //     {
  //       headers: {
  //         'Content-type': 'application/json',
  //         Authorization: `Bearer ${tokenVal.value}`,
  //       },
  //     }
  //   );
  //   toast.promise(
  //     response,
  //     {
  //       loading: 'Please Wait...',
  //       success: async ({ data }) => {
  //         dispatch(setCountCart(data.data.details.length));
  //         setIsOpen(false);
  //         return 'successfully added to cart';
  //       },
  //       error: (err) => {
  //         return `This just happened: ${err.message}`;
  //       },
  //     },
  //     {
  //       style: {
  //         minWidth: '250px',
  //         filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
  //       },
  //       success: {
  //         duration: 5000,
  //         icon: '🔥',
  //       },
  //     }
  //   );
  // };

  const renderMinMax = (item) => {
    if (item.modifier.max === 0 || item.modifier.min === 0) {
      return (
        <div className='flex items-center text-[10px] ml-4 font-normal opacity-60 text-[#b7b7b7]'>
          <h1>Optional</h1>
        </div>
      );
    } else {
      return (
        <div className='flex items-center text-[10px] ml-4 font-normal opacity-60 text-[#b7b7b7]'>
          <h1>Min {item.modifier.min}</h1>
          <h1 className='ml-1'>Max {item.modifier.max}</h1>
        </div>
      );
    }
  };
  return (
    <div className='grid grid-rows-16 h-full'>
      <div className='px-[16px] h-full fo nt-semibold overflow-y-auto'>
        <div className='w-full flex justify-end mt-2'>
          <XMarkIcon
            onClick={() => setIsOpen(false)}
            className='w-7 h-7 text-white bg-orange-400 rounded-lg cursor-pointer'
          />
        </div>
        <div className='h-72 relative w-full'>
          <Image
            src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
            placeholder='blur'
            blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
            fill={true}
            alt='image data url'
          />
        </div>
        <div className='w-full flex justify-between items-center mt-2 text-[14px] font-bold'>
          <h1>{selectedProduct?.product.name}</h1>
          <h1 className='text-[#f78730]'>
            SGD {selectedProduct?.product.retailPrice}
          </h1>
        </div>
        {selectedProduct?.product?.productModifiers?.map((item) => {
          return (
            <div key={item?.modifierID} className='mt-10'>
              <div className='flex items-center'>
                <div className='text-[14px]'>{item.modifierName}</div>
                {renderMinMax(item)}
              </div>
              <div className='mt-2 font-normal text-sm'>
                {item?.modifier?.details?.map((modifier) => {
                  return (
                    <div key={modifier?.id}>
                      <RadioInput
                        modifierID={item.modifierID}
                        modifier={modifier}
                        setModifiers={setModifiers}
                      />
                      <hr className='bg-[#ccc] h-[2px]' />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-full bg-[#D0D0D0] p-2 flex items-center justify-center'>
        <button
          onClick={handleAddToCart}
          className='bg-[#F7872F] w-full py-2 rounded-lg text-white'
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
