import constants from "./../../src/constants";
import sourceReducer from './../../src/reducers/sourceReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';


describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(sourceReducer, initialState);

  describe('sourceReducer', () => {
    it('Should accept and return initialState', () => {
      expect(sourceReducer(initialState.savedSourceList, { type: null } )).toEqual(initialState.savedSourceList);
    })
  })
});
