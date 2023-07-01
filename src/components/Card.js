export default function Card({ items }) {
  return (
    <div class='max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800'>
      <div class='flex items-center justify-between'>
        <span class='text-sm font-light text-gray-600 dark:text-gray-400'>
          Mar 10, 2019
        </span>
        <a
          class='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
          tabindex='0'
          role='button'
        >
          SGD 10
        </a>
      </div>

      <div class='mt-2'>
        <a
          href='#'
          class='text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
          tabindex='0'
          role='link'
        >
          lol
        </a>
        <p class='mt-2 text-gray-600 dark:text-gray-300'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>

      <div class='flex items-center justify-between mt-4'>
        <div class='flex items-center'>
          <a
            class='font-bold text-gray-700 cursor-pointer dark:text-gray-200'
            tabindex='0'
            role='link'
          >
            Ordering Statue: MOAD
          </a>
        </div>
      </div>
    </div>
  );
}
