import React, { useState } from "react";
import store from "../../store/store";

export default function Test2Page() {
  let [count, setCount] = useState(store.getState().counter.count);
  console.log("HienVQ ~  count:", count);
  const handleInc = () => {
    //dispatch action
    // store.dispatch({ type: "INC", payload: 10 });
    count = 100;
  };
  const handleDec = () => {
    //dispatch action
    // store.dispatch({ type: "DEC", payload: 10 });
    console.log("HienVQ ~  count:", count);
  };

  store.subscribe(() => setCount(store.getState().counter.count));
  return (
    <div>
      <button onClick={handleInc}>Increase2</button>
      <button onClick={handleDec}>Decrease2</button>
      <h1>{count}</h1>
    </div>
  );
}
