import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export const store = configureStore({
  devTools: true,
  reducer: { counter: counterReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
