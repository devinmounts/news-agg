import * as types from './../constants/ActionTypes';
import v4 from 'uuid';

export function fetchSources(){
  return function (dispatch) {
    const localSourceSearchId = v4();
    dispatch(requestSources(localSourceSearchId));
    return fetch('https://newsapi.org/v2/sources?apiKey=93ddfdc17b9d4504abef19dc84092198').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      dispatch(receiveSources(json.sources, localSourceSearchId));
      dispatch(updateCurrentSourceListId(localSourceSearchId));
    });
  };
}

export function fetchTopHeadlines(){
  return function (dispatch) {
    const localHeadLinesSearchId = v4();
    dispatch(requestTopHeadlines(localHeadLinesSearchId));
    return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=93ddfdc17b9d4504abef19dc84092198').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      dispatch(receiveTopHeadlines(json.articles, localHeadLinesSearchId));
    })
  }
}

export const requestSources = (localSourceSearchId) => ({
  type: types.REQUEST_SOURCES,
  localSourceSearchId
});

export const requestTopHeadlines = (localHeadLinesSearchId, url) => ({
  type: types.REQUEST_TOPHEADLINES,
  localHeadLinesSearchId,
  url
})

export const receiveSources = (sources, localSourceSearchId) => ({
  type: types.RECEIVE_SOURCES,
  sources: sources,
  localSourceSearchId
});

export const receiveTopHeadlines = (articles, localHeadLinesSearchId) => ({
  type: types.RECEIVE_TOPHEADLINES,
  articles: articles,
  localHeadLinesSearchId
})

export const updateCurrentSourceListId = (localSourceSearchId) => ({
  type: types.UPDATE_SOURCE_LIST_ID,
  localSourceSearchId
});

export const updateCurrentSourceUrl = (url) => ({
  type: types.UPDATE_SOURCE_URL,
  url
});
