import React from 'react';
import sourceListReducer from './sourceListReducer';
import savedArticleListReducer from './savedArticleListReducer';
import currentSourceListIdReducer from './currentSourceListIdReducer';
import currentArticleListIdReducer from './currentArticleListIdReducer';
import currentSourceUrlReducer from './currentSourceUrlReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentSourceListId: currentSourceListIdReducer,
  currentSourceUrl: currentSourceUrlReducer,
  currentArticleListId: currentArticleListIdReducer,
  savedSourceList: sourceListReducer,
  savedArticleList: savedArticleListReducer
});

export default rootReducer;
