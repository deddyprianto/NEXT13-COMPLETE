import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const dataPersistedSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = dataPersistedSlice.actions;
export default dataPersistedSlice.reducer;
