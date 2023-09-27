import React from "react";

const Child = () => {
  console.log("Child called");

  return <div>Child</div>;
};

export default React.memo(Child);
