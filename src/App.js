import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import { Provider } from "react-redux";
import store from "./store/store";
import MyNotification from "./components/Notification";
function App() {
  return (
    <Provider store={store}>
      <MyNotification />
      <RouterProvider router={myRouter}></RouterProvider>
    </Provider>
  );
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
