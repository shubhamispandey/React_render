import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Shubham");
  const [count, setCount] = useState(0);

  console.log("Parent called");

  return (
    <div>
      <div>Name: {name}</div>
      <div>Count: {count}</div>
      <button onClick={() => setName("Rahul")}>Change Name</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment count</button>
      <Child name={name} />
    </div>
  );
};

export default Parent;
