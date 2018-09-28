import constants from './../constants';
const { initialState, types } = constants;

const sourceUrlReducer = ( state = initialState, action) => {
  let newStateSlice;
  let newState;
  switch(action.type) {
  case types.UPDATE_SOURCE_URL:
    return action.url;
  default:
    return state;
  }
};

export default sourceUrlReducer;
