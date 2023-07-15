import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneCode: '',
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setPhoneCode: (state, action) => {
      state.phoneCode = action.payload;
    },
  },
});

export const { setPhoneCode } = dataSlice.actions;
export default dataSlice.reducer;
