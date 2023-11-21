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
export { increase, decrease };
