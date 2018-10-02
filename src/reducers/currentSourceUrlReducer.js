import constants from './../constants';
const { initialState, types } = constants;

const currentSourceUrlReducer = ( state = initialState.currentSourceUrl, action) => {
  switch(action.type) {
  case types.UPDATE_SOURCE_URL:
    return action.url;
  default:
    return state;
  }
};

export default currentSourceUrlReducer;
