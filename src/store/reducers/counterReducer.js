const initialState = {
  count: 11,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  //action = {type: 'INC', payload: 10}
  switch (type) {
    case "INC":
      return {
        count: state.count + payload,
      };
    case "DEC":
      return {
        count: state.count - payload,
      };
    default:
      return state;
  }
  // return newState
};

export default counterReducer;
