import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from "./reducers";

const initialState  = {};
const middleware = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  initialState, compose(
    applyMiddleware(...middleware)
  )
);