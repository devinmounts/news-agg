import constants from "./../../src/constants";
import sourceListReducer from './../../src/reducers/sourceListReducer';
import savedArticleListReducer from './../../src/reducers/savedArticleListReducer';
import currentSourceListIdReducer from './../../src/reducers/currentSourceListIdReducer';
import currentArticleListIdReducer from './../../src/reducers/currentArticleListIdReducer';
import currentSourceUrlReducer from './../../src/reducers/currentSourceUrlReducer';
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
      expect(store.getState().savedArticleList).toEqual(savedArticleListReducer(initialState.savedArticleList, { type: null }));
      expect(store.getState().currentSourceListId).toEqual(currentSourceListIdReducer(initialState.currentSourceListId, { type: null }));
      expect(store.getState().currentSourceUrl).toEqual(currentSourceUrlReducer(initialState.currentSourceUrl, { type: null }));
      expect(store.getState().currentArticleListId).toEqual(currentArticleListIdReducer(initialState.currentArticleListId, { type: null }));

    });
  });
});
