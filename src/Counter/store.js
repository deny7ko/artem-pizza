import { composeWithDevTools } from "redux-devtools-extension";
import {
  configureStore,
  createReducer,
  createAction,
  createSlice,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = { value: 0 };

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

// const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase('counter/increment', (state) => {
//       state.value++
//     })
//     .addCase('counter/decrement', (state) => {
//       state.value--
//     })
// })

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export const store = configureStore({
  reducer: { counter: counter.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => console.log(store.getState()));
