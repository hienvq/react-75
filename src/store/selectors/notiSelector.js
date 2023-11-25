import { createSelector } from "@reduxjs/toolkit";

export const notiSelector = createSelector(
  (globalState) => globalState.noti,
  (notiState) => notiState
);
