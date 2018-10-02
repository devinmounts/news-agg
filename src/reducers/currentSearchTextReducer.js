import constants from './../constants';
const { initialState, types } = constants;

const currentSearchTextReducer = ( state = initialState.currentSearchText, action) => {
  switch(action.type) {
  case types.UPDATE_SEARCH_TEXT:
    return action.text;
  default:
    return state;
  }
};

export default currentSearchTextReducer;
