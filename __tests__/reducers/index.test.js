import constants from "./../../src/constants";
import sourceListReducer from './../../src/reducers/sourceListReducer';
import currentSourceListReducer from './../../src/reducers/currentSourceListReducer';
import rootReducer from './../../src/reducers'
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(rootReducer, initialState);

  describe('rootReducer', () => {
    it('Should accept and return initialState', () => {
      expect(rootReducer(initialState, { type: null } )).toEqual(initialState);
    });

    it('Should contian logic from both reducers', () => {
      expect(store.getState().savedSourceList).toEqual(sourceListReducer(initialState.savedSourceList, { type: null }));
      expect(store.getState().currentSourceListId).toEqual(currentSourceListReducer(initialState.currentSourceListId, { type: null }));
    });
  });
});
