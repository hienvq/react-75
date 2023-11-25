// import { applyMiddleware, legacy_createStore } from "redux";
// import rootReducer from "./reducers/root";
// import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "./slices/counterSlice";
import { reducer as notiReducer } from "./slices/notiSlice";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true });

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk.withExtraArgument({ myname: "Hien" }))
//   // other store enhancers if any
// );
// const store = legacy_createStore(rootReducer, enhancer);

const store = configureStore({
  reducer: {
    noti: notiReducer,
  },
});
export default store;

// slice
