import React from 'react';
import sourceListReducer from './sourceListReducer';
import topHeadlinesListReducer from './topHeadlinesListReducer';
import currentSourceListIdReducer from './currentSourceListIdReducer';
import currentSourceUrlReducer from './currentSourceUrlReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentSourceListId: currentSourceListIdReducer,
  currentSourceUrl: currentSourceUrlReducer,
  savedSourceList: sourceListReducer,
  savedArticleList: topHeadlinesListReducer
});

export default rootReducer;
