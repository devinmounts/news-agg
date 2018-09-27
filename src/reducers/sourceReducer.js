import constants from './../constants';
const { initialState, types } = constants;

const sourceReducer = (state = initialState.savedSourceList, action) => {
  let newSearchByIdEntry;
  let newSearchByIdStateSlice;
  switch(action.type) {
    case types.REQUEST_SOURCES:
      newSearchByIdEntry = {
        isFetching: true,
        localSearchId: action.localSearchId
      }
      newSearchByIdStateSlice = Object.assign({}, state, {
        [action.localSearchId]: newSearchByIdEntry
      });
      return newSearchByIdStateSlice;
    default:
      return state;
  }
}

export default sourceReducer;
