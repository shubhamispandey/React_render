import React, { useState } from "react";
import Child1 from "./Child1";

// const Parent1 = () => {
const Parent1 = ({ children }) => {
  const [c, sC] = useState(0);
  console.log("Parent1 Render");
  return (
    <div>
      <h5>Count: </h5>
      <h6>{c}</h6>
      <button onClick={() => sC((a) => ++a)}>inc++</button>
      <button onClick={() => sC(0)}>set 0</button>
      {/* <Child1 /> */}
      {children}
    </div>
  );
};
export default Parent1;
