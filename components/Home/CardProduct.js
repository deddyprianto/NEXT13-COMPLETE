import Image from 'next/image';
export default function CardProduct({ data }) {
  return (
    <div class='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4'>
      <div className='w-full h-52 relative'>
        <Image
          src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
          alt='Signature Beef Stew 红烧牛肉'
          fill={true}
          placeholder='blur'
          blurDataURL='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
        />
      </div>

      <div class='p-6'>
        <div>
          <span class='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
            {data?.itemType}
          </span>
          <a
            href='#'
            class='block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline'
            tabindex='0'
            role='link'
          >
            {data?.name}
          </a>
          <p class='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
            egestas quam volutpat viverra. In pretium nec senectus erat. Et
            malesuada lobortis.
          </p>
        </div>

        <div class='mt-4'>
          <div class='flex items-center'>
            <div class='flex items-center'>
              <Image
                width={30}
                height={30}
                className='rounded-full'
                src='https://cdn-bucket-file-manager.s3.ap-southeast-1.amazonaws.com/Upload/50e6ca57-f761-4e7c-bf84-a1949f9792a8/ordering_setting/143ed491-0ad3-41ea-ab93-492f9b95d552.png'
                alt='Signature Beef Stew 红烧牛肉'
                title='Signature Beef Stew 红烧牛肉'
              />
              <a
                href='#'
                class='mx-2 font-semibold text-gray-700 dark:text-gray-200'
                tabindex='0'
                role='link'
              >
                {data?.product.categoryName}
              </a>
            </div>
            <span class='mx-1 text-xs text-gray-600 dark:text-gray-300'>
              SGD {data?.product.retailPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
