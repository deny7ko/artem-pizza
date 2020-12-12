import { createStore } from "redux";
import { counterReducer } from "./Counter/reducer";

export const store = createStore(counterReducer);
