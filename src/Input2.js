import React from "react";
import { InputContext } from "./context/InputContext";

export default function Input2() {
  // const { value, callback } = props;
  const { value2, callback2 } = React.useContext(InputContext);
  return (
    <div>
      <label>Temp F:</label>
      <input type="number" value={value2} onChange={(event) => callback2(event.target.value)} />
    </div>
  );
}
