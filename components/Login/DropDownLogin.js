import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import SearchInput from 'react-search-input';
import { valuePhoneNumber } from '@/helper/myfn';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { setDropDownPhoneCode } from '@/store/dataSlice';

export default function DropDownLogin() {
  const dispatch = useDispatch();
  const [valueSearchCode] = useState('');
  const [phoneCountryCode] = useState('+65');

  return (
    <div>
      <Dropdown
        onChange={(e) => {
          const phoneNumberString = e.value;
          const phoneNumberCode = '+' + phoneNumberString.match(/\+(\d+)/)[1];
          dispatch(setDropDownPhoneCode(phoneNumberCode));
        }}
        menuClassName='bg-black'
        options={valuePhoneNumber(phoneCountryCode, valueSearchCode)}
        value={phoneCountryCode}
        placeholder={phoneCountryCode}
      />
    </div>
  );
}

// return (
//   <Menu as='div' className='relative inline-block text-left'>
//     <div>
//       <Menu.Button className='inline-flex w-full justify-center rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
//         {phoneCountryCode}
//         <ChevronDownIcon
//           className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
//           aria-hidden='true'
//         />
//       </Menu.Button>
//     </div>
//     <Transition
//       as={Fragment}
//       enter='transition ease-out duration-100'
//       enterFrom='transform opacity-0 scale-95'
//       enterTo='transform opacity-100 scale-100'
//       leave='transition ease-in duration-75'
//       leaveFrom='transform opacity-100 scale-100'
//       leaveTo='transform opacity-0 scale-95'
//     >
//       <Menu.Items className='mt-2 w-56 h-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto'>
//         <div className='px-1 py-1'>
//           <SearchInput
//             placeholder='Search for country code'
//             style={{
//               width: '100%',
//               padding: '10px',
//               marginLeft: '5px',
//               border: 'none',
//               outline: 'none',
//             }}
//             onChange={(e) => setValueSearchCode(e)}
//           />
//           {valuePhoneNumber(phoneCountryCode, valueSearchCode).map((item) => {
//             const getPhoneCodeFromStr = item.substring(item.indexOf(':') + 1);
//             return (
//               <Menu.Items
//                 onClick={() =>
//                   setPhoneCountryCode(getPhoneCodeFromStr.split(' ')[1])
//                 }
//                 key={item}
//               >
//                 {item}
//               </Menu.Items>
//             );
//           })}
//         </div>
//       </Menu.Items>
//     </Transition>
//   </Menu>
// );
