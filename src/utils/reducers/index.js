import { combineReducers } from "redux";
import { reducerTheme } from "./reducerTheme";
import { reducerEditor } from "./reducerEditor";

export const rootReducer = combineReducers({
  theme: reducerTheme,
  editor: reducerEditor,
});
