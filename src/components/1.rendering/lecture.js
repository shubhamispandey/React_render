/* ============= INITIAL RENDER ============= */

// When we write code in react all the React Components
// are converted into react elements which are then
// mounted on to DOM.

// React Components => React Elements => Mounted on DOM

// It is done in 2 Phases:
//   1.Render Phase
//   2.Commit Phase

// 1. In render phase the JSX is converted to React Elements
// 2. After all React Elements are made they are mounted on
//    DOM in Commit Phase through "reactDom" package

/* ============= RE-RENDER ============= */

// However in Re-Render phase the scenarios are different

// 1.In Render phase React starts from the root of the component
//   tree and goes downward finding all the components that have
//   been flagged needing updates.
// 2.For each flaged component React converts them to React Elements
//   (js object) using createElement() method.
// 3.React now compares the new set of flagged components and components
//   from the last render.
// 4.A list of all the changes is made and given to reactDom in the
//   Commit phase.

//* It is very important to understand that rendering is not
//  same as updating the DOM.
//* A component can rerender without updating dom
//* eg: if a component state is same as prev it will rerender
//      but after comparing the prev render with current the
//      changes will be discarded
