import * as types from './../constants/ActionTypes';
import v4 from 'uuid';

export function fetchSources(){
  return function (dispatch) {
    const localSourceSearchId = v4();
    dispatch(requestSources(localSourceSearchId));
    return fetch('https://newsapi.org/v2/sources?apiKey=7b14eb4195fc4f7199ee2c73e2edb2ce').then(
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
    input = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7b14eb4195fc4f7199ee2c73e2edb2ce';
  } else {
    input = `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=7b14eb4195fc4f7199ee2c73e2edb2ce`;  }
  return function (dispatch) {
    const localHeadLinesSearchId = v4();
    dispatch(requestArticles(localHeadLinesSearchId));
    return fetch(input).then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json) {
      dispatch(receiveArticles(json.articles, localHeadLinesSearchId));
      dispatch(updateCurrentArticleListId(localHeadLinesSearchId));
    });
  };
}

export function fetchArticlesByUserSearch(text, dateFrom, dateTo){
  let input;
  console.log(dateFrom);
  console.log(dateTo);
  if(dateFrom != null && dateTo != null){
    input = `https://newsapi.org/v2/everything?q=${text}&from=${dateFrom}&to=${dateTo}&apiKey=7b14eb4195fc4f7199ee2c73e2edb2ce`;
  } else {
    input = `https://newsapi.org/v2/everything?q=${text}&apiKey=7b14eb4195fc4f7199ee2c73e2edb2ce`;
  }

  return function(dispatch) {
    const localArticlesByTextSearchId = v4();
    dispatch(requestArticles(localArticlesByTextSearchId));
    return fetch(input).then(
      response => response.json(),
      error => console.log('An error occured', error)
    ).then(function(json){
      console.log(json);
      dispatch(receiveArticles(json.articles, localArticlesByTextSearchId));
      dispatch(updateCurrentArticleListId(localArticlesByTextSearchId));
    });
  };
}

export const requestSources = (localSourceSearchId) => ({
  type: types.REQUEST_SOURCES,
  localSourceSearchId
});

export const requestArticles = (localHeadLinesSearchId) => ({
  type: types.REQUEST_ARTICLES,
  localHeadLinesSearchId,
});

export const receiveSources = (sources, localSourceSearchId) => ({
  type: types.RECEIVE_SOURCES,
  sources: sources,
  localSourceSearchId
});

export const receiveArticles = (articles, localHeadLinesSearchId) => ({
  type: types.RECEIVE_ARTICLES,
  articles: articles,
  localHeadLinesSearchId
});

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
