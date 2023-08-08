import Image from 'next/image';
export default function CardProduct({ data }) {
  return (
    <div
      className='grid w-full rounded-[16px] bg-[#f2f2f2] mt-4 border-[1px] border-[#80808080] h-52 grid-cols-16'
      style={{ boxShadow: 'rgba(128, 128, 128, 0.5) 0px 0px 5px' }}
    >
      <div className='text-black flex flex-col justify-between pb-4 pt-4 pl-4'>
        <div className='flex items-center'>
          <div className='bg-orange-500 rounded-sm text-white w-5 h-5 text-center text-sm'>
            3x
          </div>
          <p className='ml-2'>{data?.name}</p>
        </div>
        <div>SGD {data?.product.retailPrice}</div>
      </div>
      {/* col 2 */}
      <div className='flex flex-col justify-center items-center'>
        <Image
          src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
          placeholder='blur'
          blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
          width={80}
          height={80}
          alt='image data url'
        />
        <button className='w-[80px] mx-2 my-2 bg-orange-500 transition duration-150 ease-in-out hover:bg-orange-500 rounded text-white px-6 py-1 text-xs'>
          Add
        </button>
      </div>
    </div>
  );
}
