import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action === "Increment") return ++state;
  else if (action === "Decrement") return --state;
  else if (action === "Reset") return initialState;
  else return state;
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("Increment")}>inc++</button>
      <button onClick={() => dispatch("Decrement")}>dec--</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};
export default UseReducer;
