import * as types from './../constants/ActionTypes';
import v4 from 'uuid';

export function fetchSources(){
  return function (dispatch) {
    const localSearchId = v4();
    dispatch(requestSources());
    return fetch('https://newsapi.org/v2/sources?apiKey=72b782e18f474153aa0e481445dec308').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      console.log(json);
    });
  };
}

export const requestSources = (localSearchId) => ({
  type: types.REQUEST_SOURCES,
  localSearchId
});

export const receiveSources = (sources, localSearchId) => ({
  type: types.RECEIVE_SOURCES,
  sources: sources,
  localSearchId
});
