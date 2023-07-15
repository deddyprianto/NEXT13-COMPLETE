import { addProdToDatabase } from '@/actions/serverActions';

export default function InputLogin() {
  return (
    <form action={addProdToDatabase}>
      <div className='mt-2'>
        <div>
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            className='block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
          />
        </div>
      </div>

      <div className='mt-4'>
        <button
          type='submit'
          className='inline-flex justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full'
        >
          next
        </button>
      </div>
    </form>
  );
}
