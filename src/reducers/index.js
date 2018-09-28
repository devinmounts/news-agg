import React from 'react';
import sourceListReducer from './sourceListReducer';
import currentSourceListReducer from './currentSourceListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentSourceListId: currentSourceListReducer,
    savedSourceList: sourceListReducer
  });

export default rootReducer;
