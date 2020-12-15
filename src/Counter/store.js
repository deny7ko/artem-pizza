import { composeWithDevTools } from "redux-devtools-extension";
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

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
