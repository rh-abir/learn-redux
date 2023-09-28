import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    ccounter: counterReducer,
  },
});

export default store;
