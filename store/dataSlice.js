import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropDownPhoneCode: '+65',
  phoneNumberIsValid: false,
  dataPhoneNumber: {},
  loading: false,
  idCategory: '',
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setPhoneCode: (state, action) => {
      state.phoneNumberIsValid = action.payload;
    },
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setDataPhoneNumber: (state, action) => {
      state.dataPhoneNumber = action.payload;
    },
    setDropDownPhoneCode: (state, action) => {
      state.dropDownPhoneCode = action.payload;
    },
    setIdCategory: (state, action) => {
      state.idCategory = action.payload;
    },
  },
});

export const {
  setPhoneCode,
  setIsLoading,
  setDataPhoneNumber,
  setDropDownPhoneCode,
  setIdCategory,
} = dataSlice.actions;
export default dataSlice.reducer;
