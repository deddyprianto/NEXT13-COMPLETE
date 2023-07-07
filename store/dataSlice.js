import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setDataUser } = dataSlice.actions;
export default dataSlice.reducer;
