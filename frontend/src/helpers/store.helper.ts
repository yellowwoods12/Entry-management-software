import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers";

// variables
const initState = {};
const middleware = [thunk];

// main store
export const store = createStore(
  rootReducer,
  initState,
  compose(applyMiddleware(...middleware))
);
