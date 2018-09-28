import constants from "./../../src/constants";
import topHeadlinesListReducer from './../../src/reducers/topHeadlinesListReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

const testState = {
  1: {
    isFetching: true,
    topHeadlines: [],
    localHeadLinesSearchId: 1
  }
}

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(topHeadlinesListReducer, initialState);

  describe('topHeadlinesListReducer', () => {
    it('Should accept and return initialState', () => {
      expect(topHeadlinesListReducer(initialState.savedArticlesList, { type: null } )).toEqual(initialState.savedArticlesList);
    });

    it('Should update state when API data is requested', () => {
      const action = actions.requestTopHeadlines();
      const newStateEntry = {
        isFetching: true,
        topHeadlines: [],
        localHeadLinesSearchId: action.localHeadLinesSearchId
      };
      expect(topHeadlinesListReducer(initialState.savedArticlesList, action)[action.localHeadLinesSearchId]).toEqual(newStateEntry);
    })

    it('Should update state on receive topHeadlines', () => {
      const action = actions.receiveTopHeadlines([],1);
      const newObject = {
        isFetching: false,
        topHeadlines: [],
        localHeadLinesSearchId: action.localHeadLinesSearchId
      };
      expect(topHeadlinesListReducer(testState, action)[action.localHeadLinesSearchId]).toEqual(newObject);
    })
  })
});
