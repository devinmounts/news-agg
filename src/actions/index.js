import * as types from './../constants/ActionTypes';
import v4 from 'uuid';

export function fetchSources(){
  return function (dispatch) {
    const localSourceSearchId = v4();
    dispatch(requestSources(localSourceSearchId));
    return fetch('https://newsapi.org/v2/sources?apiKey=5dfe31812ae54b7d966b36c9e2cc939f').then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      dispatch(receiveSources(json.sources, localSourceSearchId));
      dispatch(updateCurrentSourceListId(localSourceSearchId));
    });
  };
}

export function fetchTopHeadlines(url){
  let input;
  if(url === null){
    input = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5dfe31812ae54b7d966b36c9e2cc939f';
  } else {
    input = `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=5dfe31812ae54b7d966b36c9e2cc939f`;  }
  return function (dispatch) {
    console.log('url is', url)
    const localHeadLinesSearchId = v4();
    dispatch(requestTopHeadlines(localHeadLinesSearchId));
    return fetch(input).then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      dispatch(receiveTopHeadlines(json.articles, localHeadLinesSearchId));
      dispatch(updateCurrentArticleListId(localHeadLinesSearchId));
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

export const updateCurrentArticleListId = (localHeadLinesSearchId) => ({
  type: types.UPDATE_ARTICLE_LIST_ID,
  localHeadLinesSearchId
});

export const updateCurrentSourceUrl = (url) => ({
  type: types.UPDATE_SOURCE_URL,
  url
});
