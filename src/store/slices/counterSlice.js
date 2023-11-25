import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
const increaseAsync = createAsyncThunk("INC_ASYNC", async (data) => {
  await delay();
  return data;
});
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 11,
  },
  reducers: {
    increase: (state, action) => {
      return { count: state.count + action.payload };
    },
    decrease: (state, action) => {
      return { count: state.count - action.payload };
    },
  },
  extraReducers: {
    [increaseAsync.fulfilled]: (state, action) => {
      console.log("HienVQ ~  action:2222", action);
      return { count: state.count + action.payload };
    },
    [increaseAsync.rejected]: (state, action) => {
      return { count: state.count + action.payload };
    },
    [increaseAsync.pending]: (state, action) => {
      // return { count: state.count + action.payload };
    },
  },
});
const { actions, reducer } = counterSlice;
const { increase, decrease } = actions;
export { reducer, increase, decrease, increaseAsync };
// status of promise: fulfilled, pending, rejected
