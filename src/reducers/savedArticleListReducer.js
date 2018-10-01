import constants from './../constants';
const { initialState, types } = constants;

const savedArticleListReducer = ( state = initialState.savedArticleList, action) => {
  let newArticleSearchByIdEntry;
  let newArticleSearchByIdStateSlice;
  switch(action.type) {
  case types.REQUEST_ARTICLES:
    newArticleSearchByIdEntry = {
      isFetching: true,
      articles: [],
      localHeadLinesSearchId: action.localHeadLinesSearchId
    };
    newArticleSearchByIdStateSlice = Object.assign({}, state, {
      [action.localHeadLinesSearchId]: newArticleSearchByIdEntry
    });
    return newArticleSearchByIdStateSlice;
  case types.RECEIVE_ARTICLES:
    newArticleSearchByIdEntry = Object.assign({}, state[action.localHeadLinesSearchId], {
      isFetching: false,
      articles: action.articles,
      localHeadLinesSearchId: action.localHeadLinesSearchId
    });
    newArticleSearchByIdStateSlice = Object.assign({}, state, {
      [action.localHeadLinesSearchId]: newArticleSearchByIdEntry
    });
    return newArticleSearchByIdStateSlice;
  default:
    return state;
  }
};

export default savedArticleListReducer;
