import { THEME } from "utils/actions/types";

const initialState = localStorage.getItem('theme') || 'light';

export const reducerTheme = (state = initialState,action) => {
  switch(action.type) {
    case THEME:
      let nextState = '';
      if(state === 'light') {
        nextState = 'dark';
      } else {
        nextState = 'light';
      }
      localStorage.setItem('theme',nextState);
      return nextState;
    default:
      return state;
  }
}