import { createSelector } from "@reduxjs/toolkit";

export const numberSelector = (globalState) => globalState.counter.count;

export const counterSelector = createSelector(
  (globalState) => globalState.counter,
  (counterState) => counterState.count
);
// globalState = {
//   counter: { count: 10 },
// };
