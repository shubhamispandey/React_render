// React Memo is a performance optimization technique in React
// that memoizes the rendering of a component based on its props.

// It helps prevent unnecessary re-renders of components by caching
// the result of a component's rendering and comparing it with the
// previous rendering.

// Here's a step-by-step explanation of how to use React Memo:

// Step 1: Import the necessary modules
import React, { memo } from "react";

// Step 2: Create your component
const MyComponent = ({ prop1, prop2 }) => {
  return (
    <div>
      <h1>{prop1}</h1>
      <p>{prop2}</p>
    </div>
  );
};

// Step 3: Memoize the component
const MemoizedComponent = memo(MyComponent);

// Step 4: Use the memoized component in your application
const App = () => {
  return (
    <div>
      <MemoizedComponent prop1="Hello" prop2="World" />
    </div>
  );
};

//   In this example, the MyComponent is memoized using the memo function.
//   The memo function takes the component as an argument and returns a
//   memoized version of the component. The memoized component will
//   only re-render if its props have changed. If the props remain
//   the same, the cached rendering result is used, avoiding
//   unnecessary re-rendering.
