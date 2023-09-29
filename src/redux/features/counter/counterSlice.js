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
    incrementByAction: (state, actions) => {
      state.counte += actions.payload;
    },

    decrement: (state, actions) => {
      state.counte -= actions.payload;
    },

  },
});

export const { increment, decrement, incrementByAction } = counterSlice.actions;

export default counterSlice.reducer;
