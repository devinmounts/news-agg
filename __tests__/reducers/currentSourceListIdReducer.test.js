import constants from "./../../src/constants";
import currentSourceListIdReducer from './../../src/reducers/currentSourceListIdReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(currentSourceListIdReducer, initialState);

  describe('currentSourceListIdReducer', () => {
    it('Should accept and return initialState', () => {
      expect(currentSourceListIdReducer(initialState.currentSourceListId, { type: null } )).toEqual(initialState.currentSourceListId);
    });

    it('Should set currentSourceListId to localSourceSearchId', () => {

      expect(currentSourceListIdReducer(initialState.currentSourceListId, actions.updateCurrentSourceListId(1))).toEqual(1);
    })
  })
});
