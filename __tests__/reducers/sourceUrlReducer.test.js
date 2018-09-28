import constants from "./../../src/constants";
import currentSourceUrlReducer from './../../src/reducers/currentSourceUrlReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(currentSourceUrlReducer, initialState);

  describe('currentSourceListReducer', () => {
    it('Should accept and return initialState', () => {
      expect(currentSourceUrlReducer(initialState, { type: null } )).toEqual(initialState);
    });

    // it('Should set currentSourceListId to localSourceSearchId', () => {
    //
    //   expect(currentSourceUrlReducer(initialState.currentSourceListId, actions.updateCurrentSourceListId(1))).toEqual(1);
    // })
  })
});
