const initialState = {
  name: "A",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //action = {type: 'EDIT', payload: username}
  switch (type) {
    case "EDIT":
      return {
        name: payload,
      };
    default:
      return state;
  }
  // return newState
};

export default userReducer;
