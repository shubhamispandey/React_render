/* 
    1. There is no diffeerence between the useReducer and 
        the useState in terms of render behaviour.
    2. useReducer is used to manage a more complex states 
       where useState for simple states.
    3. Rendering is same for both useState and useReducer.
*/

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
