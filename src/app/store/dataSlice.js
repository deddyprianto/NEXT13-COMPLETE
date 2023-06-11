import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputdata: 'mamak kau mana emang',
  response: [],
};

const dataSlice = createSlice({
  name: 'testredux',
  initialState,
  reducers: {
    setDataInput: (state, action) => {
      state.inputdata = action.payload;
    },
  },
});

export const { setDataInput } = dataSlice.actions;
export default dataSlice.reducer;
