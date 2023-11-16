import React from "react";
import { InputContext } from "./context/InputContext";
import { UserContext } from "./context/UserContext";

export default function Input1() {
  // const { value, callback } = props;
  const { value1, callback1 } = React.useContext(InputContext);
  const { username } = React.useContext(UserContext);
  return (
    <div>
      <label>{username} --- Temp C:</label>
      <input type="number" value={value1} onChange={(event) => callback1(event.target.value)} />
    </div>
  );
}
