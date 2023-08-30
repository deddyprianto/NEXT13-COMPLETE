import { useCollapse } from 'react-collapsed';

export function ColapsComponent({remainingItems}) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className='text-sm w-24 text-center text-[#f78730]'>
      <button {...getToggleProps()}>
        {isExpanded ? 'Less' : 'More'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
  );
}
