import constants from './../constants';
const { initialState, types } = constants;

const sourceUrlReducer = ( state = initialState, action) => {
  let newStateSlice;
  let newState;
  switch(action.type) {
    case types.UPDATE_SOURCE_URL:
    newStateSlice = Object.assign({}, state, {
      currentSourceUrl: action.url
    });
    return newStateSlice;
  default:
    return state;
  }
}

export default sourceUrlReducer;
