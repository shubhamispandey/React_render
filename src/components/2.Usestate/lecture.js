// code=> src/Components/UseState.js

// 1.React.StrictMode intentionally double invokes function
//   component in development mode
// 2.Lets understand how components rerender as per state change

/* 
  if(Initial Render){
    if(State Change) Re-Render
    else No Rendering 
  }else if(Re-Render){ 
    if(state change) Re-Render 
    else Re-Render 1 more time and then bail out 
        from further state changes
  }
*/
// Refer 2-1.png
