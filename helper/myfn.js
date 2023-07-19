import countryCodes from 'country-codes-list';
import { createFilter } from 'react-search-input';

export const sortNewValue = (array) => {
  if (array?.length === 0) return;
  const lastItem = array?.pop();
  array?.unshift(lastItem);
  return array;
};

export const valuePhoneNumber = (phoneCountryCode, valueSearchCode) => {
  const myCountryCodesObject = countryCodes.customList(
    'countryCode',
    '{countryNameEn}: +{countryCallingCode}'
  );

  const optionCodePhone = Object.keys(myCountryCodesObject).map(
    (key) => myCountryCodesObject[key]
  );


  optionCodePhone.sort((a, b) => {
    let item = a.substring(a.indexOf(':') + 2);
    if (item === phoneCountryCode) {
      return -1;
    } else {
      return 1;
    }
  });
  
 const data = optionCodePhone.filter(createFilter(valueSearchCode));
 return data.map((str) => str.match(/\+(\d+)/)[0]);
};
