import { combineReducers } from "redux";
import { reducerTheme } from "./reducerTheme";

export const rootReducer = combineReducers({
  theme: reducerTheme
});