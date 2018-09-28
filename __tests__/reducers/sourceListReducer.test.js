import constants from "./../../src/constants";
import sourceListReducer from './../../src/reducers/sourceListReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

const testState = {
  1: {
    isFetching: true,
    sources: [],
    localSourceSearchId: 1
  }
}

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(sourceListReducer, initialState);

  describe('sourceListReducer', () => {
    it('Should accept and return initialState', () => {
      expect(sourceListReducer(initialState.savedSourceList, { type: null } )).toEqual(initialState.savedSourceList);
    });

    it('Should update state when API data is requested', () => {
      const action = actions.requestSources();
      const newStateEntry = {
        isFetching: true,
        sources: [],
        localSourceSearchId: action.localSourceSearchId
      };
      expect(sourceListReducer(initialState.savedSourceList, action)[action.localSourceSearchId]).toEqual(newStateEntry);
    })

    it('Should update state on receive sources', () => {
      const action = actions.receiveSources([],1);
      const newObject = {
        isFetching: false,
        sources: [],
        localSourceSearchId: action.localSourceSearchId
      };
      expect(sourceListReducer(testState, action)[action.localSourceSearchId]).toEqual(newObject);
    })
  })
});
