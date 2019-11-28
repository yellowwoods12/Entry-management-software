// libraries
import { combineReducers } from "redux";

// reducers
import authentication from "./authentication.reducer";
import registration from "./registration.reducer";

export const rootReducer = combineReducers({
  authentication,
  registration
});

export type AppState = ReturnType<typeof rootReducer>;
