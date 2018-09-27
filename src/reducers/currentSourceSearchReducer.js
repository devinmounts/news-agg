import constants from '../constants';
const { types, initialState} = constants;

const currentSourceSearchReducer = (state = initialState.currentSourceSearchId, action) =>{
  switch(action.type){
    case types.UPDATE_SOURCE_SEARCH_ID:
    return action.localSearchId;
  default:
    return state;
  }
}

export default currentSourceSearchReducer;
