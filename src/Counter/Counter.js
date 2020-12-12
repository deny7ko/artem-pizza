import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "./selectors";
import { increment, decrement } from "./actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
