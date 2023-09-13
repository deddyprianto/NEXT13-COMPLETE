import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropDownPhoneCode: '+65',
  phoneNumberIsValid: false,
  dataPhoneNumber: {},
  loading: false,
  idCategory: '',
  isRefreshPage: false,
  setting: [],
  dataCart: {},
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
    setIsRefreshPage: (state, action) => {
      state.isRefreshPage = action.payload;
    },
    setSettings: (state, action) => {
      state.setting = action.payload;
    },
    setDataCart: (state, action) => {
      state.dataCart = action.payload;
    },
  },
});

export const {
  setPhoneCode,
  setIsLoading,
  setDataPhoneNumber,
  setDropDownPhoneCode,
  setIdCategory,
  setIsRefreshPage,
  setSettings,
  setDataCart,
} = dataSlice.actions;
export default dataSlice.reducer;
