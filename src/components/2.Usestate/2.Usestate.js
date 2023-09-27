import React, { useState } from "react";

const UseState = () => {
  const [c, sC] = useState(0);
  console.log("render");
  return (
    <div>
      <h5>Count: </h5>
      <h6>{c}</h6>
      <button onClick={() => sC((a) => ++a)}>inc++</button>
      <button onClick={() => sC(0)}>set 0</button>
    </div>
  );
};
export default UseState;
