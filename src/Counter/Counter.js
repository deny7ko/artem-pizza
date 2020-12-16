import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store, counter } from "./store";
// import { getCounter } from "./selectors";
// import { increment, decrement } from "./actions";
// import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {JSON.stringify(store.getState().counter)}</h2>
      <button onClick={() => dispatch(counter.actions.increment("hello"))}>
        Increment
      </button>
      <button onClick={() => dispatch(counter.actions.decrement("payload"))}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
