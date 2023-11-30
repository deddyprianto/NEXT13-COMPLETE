import 'react-dropdown/style.css';
import { useCollapse } from 'react-collapsed';
import { useState } from 'react';

export default function NavbarHome({
  setSaveIdCategory,
  saveIdCategory,
  firstThreeItems,
  remainingItems,
}) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();

  return (
    <>
      <div className="bg-[#d0d0d0] h-16 flex justify-between items-center">
        {firstThreeItems?.map((item) => (
          <div
            key={item?.id}
            onClick={() => setSaveIdCategory(item?.id)}
            className={`w-24 py-5 px-[2px] ${
              saveIdCategory === item?.id ? "bg-[#f78730]" : "bg-transparent"
            }`}
          >
            <p
              className={`${
                saveIdCategory === item?.id ? "text-white" : "text-black"
              }  truncate text-sm`}
            >
              {item?.name}
            </p>
          </div>
        ))}
        <button
          {...getToggleProps(() =>
            setExpanded((prevExpanded) => !prevExpanded)
          )}
          className="text-sm w-24 text-center text-[#f78730]"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>

      <section className="w-full bg-[#d0d0d0]" {...getCollapseProps()}>
        {remainingItems?.map((item) => (
          <div
            {...getToggleProps()}
            className="p-2 text-center cursor-pointer hover:bg-[#f78730]"
            key={item?.id}
          >
            <div onClick={() => setSaveIdCategory(item?.id)}>{item.name}</div>
          </div>
        ))}
      </section>
    </>
  );
}
