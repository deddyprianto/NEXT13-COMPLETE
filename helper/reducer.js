export const initialState = {
  tokenVal: null,
};
export const actionTypes = { SET_TOKEN: 'SET_TOKEN' };
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, tokenVal: action.tokenVal };
    default:
      return state;
  }
};
