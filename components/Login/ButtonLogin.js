export default function ButtonLogin({ handleCheckAccount, label }) {
  return (
    <button
      onClick={handleCheckAccount}
      className='inline-flex justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full mt-4'
    >
      {label}
    </button>
  );
}
