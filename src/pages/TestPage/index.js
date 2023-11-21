import React, { useState } from "react";
import store from "../../store/store";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../store/actions/counterAction";
import { numberSelector } from "../../store/selectors/counterSelector";

function TestPage(props) {
  const dispatch = useDispatch();
  const number = useSelector(numberSelector);
  // const {state, dispatch} = props
  const handleInc = () => {
    //dispatch action
    dispatch(increase(10));
  };
  const handleDec = () => {
    //dispatch action
    // props.decrease(20);
    dispatch(decrease(15));
  };

  return (
    <div>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
      <h1>{number}</h1>
    </div>
  );
}
// const mapStateToProps = (globalState) => {
//   return { number: globalState.counter.count };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: (data) => dispatch({ type: "INC", payload: data }),
//     decrease: (data) => dispatch({ type: "DEC", payload: data }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
export default TestPage;
