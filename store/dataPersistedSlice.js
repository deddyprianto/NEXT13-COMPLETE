import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isLogin: false,
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
  },
});

export const { setAccessToken, setIsLogin } = dataPersistedSlice.actions;
export default dataPersistedSlice.reducer;
