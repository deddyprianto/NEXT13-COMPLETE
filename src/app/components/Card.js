export default function Card({ items }) {
  return (
    <div className='max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-light bg-green-400 rounded-xl text-white p-3'>
          {items.id}
        </span>
        <a
          className='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
          tabIndex='0'
          role='button'
        >
          UPDATE
        </a>
      </div>

      <div className='mt-2'>
        <a
          href='#'
          className='text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
          tabIndex='0'
          role='link'
        >
          {items.title}
        </a>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>{items.body}</p>
      </div>

      <div className='flex items-center justify-between mt-4'>
        <a
          href='#'
          className='text-blue-600 dark:text-blue-400 hover:underline'
          tabIndex='0'
          role='link'
        >
          DELETE
        </a>

        <div className='flex items-center'>
          <img
            className='hidden object-cover w-10 h-10 mx-4 rounded-full sm:block'
            src={items.imageUrl}
            alt='avatar'
          />
          <a
            className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
            tabIndex='0'
            role='link'
          >
            {items.last_name}
          </a>
        </div>
      </div>
    </div>
  );
}
