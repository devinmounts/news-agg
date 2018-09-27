import React from 'react';
import sourceReducer from './sourceReducer';
import currentSourceListReducer from './currentSourceListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentSourceListId: currentSourceListReducer,
    savedSourceList: sourceReducer
  });

export default rootReducer;
