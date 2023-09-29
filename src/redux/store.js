import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counter/counterSlice";

const sotre = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default sotre;
