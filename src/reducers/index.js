import React from 'react';
import sourceReducer from './sourceReducer';
import currentSourceSearchReducer from './currentSourceSearchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentSourceSearchId: currentSourceSearchReducer,
    savedSourceList: sourceReducer
  });

export default rootReducer
