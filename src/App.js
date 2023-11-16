import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
function App() {
  return <RouterProvider router={myRouter}></RouterProvider>;
}
// onclick, onchange
// <Person id="id" text="myname" /> => props = {id:"id", text:"myname"}
export default App;

// JSX = Javascript and XML
// ol = ordered list = 1 2 3 4
// ul = unordered list = * * * *

// class A {
//   constructor(id, name) {}
// }

// new A(id, name);

// function A(id, name) {}

// A(id, name);

// A > B => props
// B > A => callback props
// B > C => callback + prop
