import constants from '../constants';
const { types, initialState} = constants;

const currentSourceListIdReducer = (state = initialState.currentSourceListId, action) =>{
  switch(action.type){
  case types.UPDATE_SOURCE_LIST_ID:
    return action.localSourceSearchId;
  default:
    return state;
  }
};

export default currentSourceListIdReducer;
