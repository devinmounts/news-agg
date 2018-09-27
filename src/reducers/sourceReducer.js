import constants from './../constants';
const { initialState, types } = constants;

const sourceReducer = (state = initialState.savedSearchList, action) => {
  let newSearchByIdEntry;
  let newSearchByIdStateSlice;
  switch(action.type) {
    case REQUEST_SOURCES:
      newSearchByIdEntry = {
        isFetching: true,
        localSearchId: action.localSearchId
      }
      newSearchByIdStateSlice = Object.assign({}, state, {
        [action.localSearchId]: newSearchByIdEntry
      });
      return newSearchByIdStateSlice;
  }
}
