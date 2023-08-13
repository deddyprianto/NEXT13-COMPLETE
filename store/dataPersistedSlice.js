import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isLogin: false,
  outletSelected: {},
};

const dataPersistedSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setOutletSelected: (state, action) => {
      state.outletSelected = action.payload;
    },
  },
});

export const { setAccessToken, setIsLogin, setOutletSelected } =
  dataPersistedSlice.actions;
export default dataPersistedSlice.reducer;
