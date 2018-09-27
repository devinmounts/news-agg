import constants from "./../../src/constants";
import currentSourceListReducer from './../../src/reducers/currentSourceListReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(currentSourceListReducer, initialState);

  describe('currentSourceListReducer', () => {
    it('Should accept and return initialState', () => {
      expect(currentSourceListReducer(initialState.currentSourceListId, { type: null } )).toEqual(initialState.currentSourceListId);
    });

    it('Should set currentSourceListId to localSourceSearchId', () => {

      expect(currentSourceListReducer(initialState.currentSourceListId, actions.updateCurrentSourceListId(1))).toEqual(1);
    })
  })
});
