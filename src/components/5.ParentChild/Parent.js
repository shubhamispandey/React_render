import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [c, sC] = useState(0);
  console.log("Parent render");
  return (
    <div>
      <h5>Count: </h5>
      <h6>{c}</h6>
      <button onClick={() => sC((a) => ++a)}>inc++</button>
      <button onClick={() => sC(0)}>set 0</button>
      <Child />
    </div>
  );
};
export default Parent;
