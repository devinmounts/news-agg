import constants from './../constants';
const { initialState, types } = constants;

const sourceListReducer = ( state = initialState.savedSourceList, action) => {
  let newSourceSearchByIdEntry;
  let newSourceSearchByIdStateSlice;
  switch(action.type) {
  case types.REQUEST_SOURCES:
    newSourceSearchByIdEntry = {
      isFetching: true,
      sources: [],
      localSourceSearchId: action.localSourceSearchId
    };
    newSourceSearchByIdStateSlice = Object.assign({}, state, {
      [action.localSourceSearchId]: newSourceSearchByIdEntry
    });
    return newSourceSearchByIdStateSlice;
  case types.RECEIVE_SOURCES:
    newSourceSearchByIdEntry = Object.assign({}, state[action.localSourceSearchId], {
      isFetching: false,
      sources: action.sources,
      localSourceSearchId: action.localSourceSearchId
    });
    newSourceSearchByIdStateSlice = Object.assign({}, state, {
      [action.localSourceSearchId]: newSourceSearchByIdEntry
    });
    return newSourceSearchByIdStateSlice;
  default:
    return state;
  }
};

export default sourceListReducer;
