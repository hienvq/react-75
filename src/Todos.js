import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, `new ${new Date().toLocaleTimeString()}`];
    }
    case "delete": {
      state.pop();
      return [...state];
    }
    default:
      return initialState;
  }
}

const initialState = [];

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleAdd() {
    dispatch({ type: "add" });
  }

  function handleDelete(e) {
    dispatch({
      type: "delete",
    });
  }

  return (
    <>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleDelete}>DELETE</button>
      <ul>
        {state.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </>
  );
}
