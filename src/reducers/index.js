import React from 'react';
import sourceListReducer from './sourceListReducer';
import topHeadlinesListReducer from './sourceListReducer';
import currentSourceListReducer from './currentSourceListReducer';
import currentSourceUrlReducer from './currentSourceUrlReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentSourceListId: currentSourceListReducer,
  currentSourceUrl: currentSourceUrlReducer,
  savedSourceList: sourceListReducer,
  savedArticleList: topHeadlinesListReducer

});

export default rootReducer;
