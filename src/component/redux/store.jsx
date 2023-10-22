import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./gretting_slice.jsx";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;