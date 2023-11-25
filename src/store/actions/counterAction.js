const increase = (data) => {
  return {
    type: "INC",
    payload: data,
  };
};
const decrease = (data) => {
  return {
    type: "DEC",
    payload: data,
  };
};
const increaseAsync = (data) => {
  return async (dispatch, getState, object) => {
    console.log("HienVQ ~  object:", object);
    const currentState = getState();
    // console.log("HienVQ ~  currentState:", currentState);
    await delay();
    dispatch(increase(data));
  };
};
const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
export { increase, decrease, increaseAsync };
