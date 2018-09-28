import constants from './../constants';
const { initialState, types } = constants;

const topHeadlinesListReducer = ( state = initialState.savedTopHeadlines, action) => {
  let newSearchByIdEntry;
  let newSearchByIdStateSlice;
  switch(action.type) {
  case types.REQUEST_TOPHEADLINES:
    newSearchByIdEntry = {
      isFetching: true,
      topHeadlines: [],
      localHeadLinesSearchId: action.localHeadLinesSearchId
    };
    newSearchByIdStateSlice = Object.assign({}, state, {
      [action.localHeadLinesSearchId]: newSearchByIdEntry
    });
    return newSearchByIdStateSlice;
  case types.RECEIVE_TOPHEADLINES:
    newSearchByIdEntry = Object.assign({}, state[action.localHeadLinesSearchId], {
      isFetching: false,
      topHeadlines: action.articles,
      localHeadLinesSearchId: action.localHeadLinesSearchId
    });
    newSearchByIdStateSlice = Object.assign({}, state, {
      [action.localHeadLinesSearchId]: newSearchByIdEntry
    });
    return newSearchByIdStateSlice;
  default:
    return state;
  }
};

export default topHeadlinesListReducer;
