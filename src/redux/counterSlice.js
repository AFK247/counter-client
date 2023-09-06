import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countValue: null,
  },
  reducers: {
    savedCount: (state, { payload }) => {
      state.countValue = payload;
    },
  },
});

export const { savedCount } = counterSlice.actions;
export default counterSlice.reducer;
