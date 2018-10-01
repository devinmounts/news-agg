import constants from "./../../src/constants";
import savedArticleListReducer from './../../src/reducers/savedArticleListReducer';
import { createStore } from 'redux';
import * as actions from './../../src/actions';

const testState = {
  1: {
    isFetching: true,
    articles: [],
    localHeadLinesSearchId: 1
  }
}

describe('News App', () => {
  const { initialState, types } = constants;
  const store = createStore(savedArticleListReducer, initialState);

  describe('savedArticleListReducer', () => {
    it('Should accept and return initialState', () => {
      expect(savedArticleListReducer(initialState.savedArticleList, { type: null } )).toEqual(initialState.savedArticleList);
    });

    it('Should update state when API data is requested', () => {
      const action = actions.requestArticles();
      const newStateEntry = {
        isFetching: true,
        articles: [],
        localHeadLinesSearchId: action.localHeadLinesSearchId
      };
      expect(savedArticleListReducer(initialState.savedArticlesList, action)[action.localHeadLinesSearchId]).toEqual(newStateEntry);
    })

    it('Should update state on receive topHeadlines', () => {
      const action = actions.receiveArticles([],1);
      const newObject = {
        isFetching: false,
        articles: [],
        localHeadLinesSearchId: action.localHeadLinesSearchId
      };
      expect(savedArticleListReducer(testState, action)[action.localHeadLinesSearchId]).toEqual(newObject);
    })
  })
});
