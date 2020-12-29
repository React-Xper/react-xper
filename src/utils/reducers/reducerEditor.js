const initialState = null;

export const reducerEditor = (state = initialState, action) => {
  switch (action.type) {
    case "EDITOR":
      return { ...state, editor: action.payload };
    case "DRAG":
      return { ...state, draggingNode: action.payload };
    default:
      return state;
  }
};
