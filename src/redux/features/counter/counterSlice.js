import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counte: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  
  reducers: {
    increment: (state) => {
      state.counte += 1;
    },

    decrement: (state, actions) => {
      state.counte -= actions.payload;
    },

  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
