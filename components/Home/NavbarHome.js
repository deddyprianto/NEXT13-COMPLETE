import 'react-dropdown/style.css';
export default function NavbarHome({
  setSaveIdCategory,
  saveIdCategory,
  firstThreeItems,
  remainingItems,
}) {
  return (
    <div class='bg-[#d0d0d0] h-16 flex justify-between items-center'>
      {firstThreeItems?.map((item) => (
        <div
          key={item?.id}
          onClick={() => setSaveIdCategory(item?.id)}
          className={`w-24 py-5 px-[2px] ${
            saveIdCategory === item?.id ? 'bg-[#f78730]' : 'bg-transparent'
          }`}
        >
          <p
            className={`${
              saveIdCategory === item?.id ? 'text-white' : 'text-black'
            }  truncate text-sm`}
          >
            {item?.name}
          </p>
        </div>
      ))}
      <div className='text-sm w-24 text-center text-[#f78730]'>More</div>
    </div>
  );
}
