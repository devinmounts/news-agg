import constants from "./../../src/constants";
import currentSourceUrlReducer from './../../src/reducers/currentSourceUrlReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(currentSourceUrlReducer, initialState);

  describe('currentSourceUrlReducer', () => {
    it('Should accept and return initialState', () => {
      expect(currentSourceUrlReducer(initialState, { type: null } )).toEqual(initialState);
    });

    it('Should create and set state slice currentSourceUrl to currentSourceUrl', () => {

      expect(currentSourceUrlReducer(initialState, actions.updateCurrentSourceUrl('http://'))).toEqual('http://');
    })
  })
});
