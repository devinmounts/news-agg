import constants from '../constants';
const { types, initialState} = constants;

const currentArticleListIdReducer = (state = initialState.currentArticleListId, action) =>{
  switch(action.type){
  case types.UPDATE_ARTICLE_LIST_ID:
    return action.localHeadLinesSearchId;
  default:
    return state;
  }
};

export default currentArticleListIdReducer;
