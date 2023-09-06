import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countValue: null,
  },
  reducers: {
    savedCount: (state, { payload }) => {
      console.log(state.countValue);
      state.countValue = payload;
      console.log(state.countValue);
    },
  },
});

export const { savedCount } = counterSlice.actions;
export default counterSlice.reducer;
