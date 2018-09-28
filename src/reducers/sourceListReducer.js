import constants from './../constants';
const { initialState, types } = constants;

const sourceListReducer = ( state = initialState.savedSourceList, action) => {
  let newSearchByIdEntry;
  let newSearchByIdStateSlice;
  switch(action.type) {
    case types.REQUEST_SOURCES:
      newSearchByIdEntry = {
        isFetching: true,
        sources: [],
        localSourceSearchId: action.localSourceSearchId
      }
      newSearchByIdStateSlice = Object.assign({}, state, {
        [action.localSourceSearchId]: newSearchByIdEntry
      });
      return newSearchByIdStateSlice;
    case types.RECEIVE_SOURCES:
      newSearchByIdEntry = Object.assign({}, state[action.localSourceSearchId], {
        isFetching: false,
        sources: action.sources,
        localSourceSearchId: action.localSourceSearchId
      });
      newSearchByIdStateSlice = Object.assign({}, state, {
        [action.localSourceSearchId]: newSearchByIdEntry
      });
      return newSearchByIdStateSlice;
    default:
      return state;
  }
}

export default sourceListReducer;
