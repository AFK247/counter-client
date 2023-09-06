import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 4,
  },
  reducers: {
    savedCount: (state, payload) => {
      console.log(state.count);
    },
  },
});

export const { savedCount } = counterSlice.actions;
export default counterSlice.reducer;
