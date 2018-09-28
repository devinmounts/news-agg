import * as types from './../constants/ActionTypes';
import v4 from 'uuid';

export function fetchSources(){
  return function (dispatch) {
    const localSourceSearchId = v4();
    dispatch(requestSources());
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
  return function (dipatch) {
    const localHeadLinesSearchId = v4();
    dispatch(requestTopHeadlines());
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

export const updateCurrentSourceListId = (localSourceSearchId) => ({
  type: types.UPDATE_SOURCE_LIST_ID,
  localSourceSearchId
});

export const updateCurrentSourceUrl = (url) => ({
  type: types.UPDATE_SOURCE_URL,
  url
});
