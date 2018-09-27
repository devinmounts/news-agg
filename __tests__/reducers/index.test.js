import constants from "./../../src/constants";
import sourceReducer from './../../src/reducers/sourceReducer';
import currentSourceListReducer from './../../src/reducers/currentSourceListReducer';
import rootReducer from './../../src/reducers'
import { createStore } from 'redux';
import * as actions from './../../src/actions';

const testState = {
  1: {
    isFetching: true,
    sources: [],
    localSearchId: 1
  }
}

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(sourceReducer, initialState);

  describe('rootReducer', () => {
    it('Should accept and return initialState', () => {
      expect(rootReducer(initialState, { type: null } )).toEqual(initialState);
    });

    it('Should contian logic from both reducers', () => {
      expect(store.getState().savedSourceList).toEqual(sourceReducer(initialState.savedSourceList, { type: null }));
      expect(store.getState().currentSourceListId).toEqual(currentSourceListReducer(initialState.currentSourceListId, { type: null }));
    })
  //
  //   it('Should update state on receive sources', () => {
  //     const action = actions.receiveSources([],1);
  //     const newObject = {
  //       isFetching: false,
  //       sources: [],
  //       localSearchId: action.localSearchId
  //     };
  //     expect(sourceReducer(testState, action)[action.localSearchId]).toEqual(newObject);
  //   })
  })
});
