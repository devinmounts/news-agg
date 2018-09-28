import constants from "./../../src/constants";
import currentArticleListIdReducer from './../../src/reducers/currentArticleListIdReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(currentArticleListIdReducer, initialState);

  describe('currentArticleListIdReducer', () => {
    it('Should accept and return initialState', () => {
      expect(currentArticleListIdReducer(initialState.currentArticleListId, { type: null } )).toEqual(initialState.currentArticleListId);
    });

    it('Should set currentArticleListId to localArticleSearchId', () => {

      expect(currentArticleListIdReducer(initialState.currentArticleListId, actions.updateCurrentArticleListId(1))).toEqual(1);
    })
  })
});
