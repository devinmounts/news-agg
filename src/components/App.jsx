import React from 'react';
import DisplayContainer from './DisplayContainer';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { fetchSources, fetchTopHeadlines } from './../actions';
import scrollToComponent from 'react-scroll-to-component';

import './styles/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollToSources = this.handleScrollToSources.bind(this)
    this.handleScrollToDisplay = this.handleScrollToDisplay.bind(this)
  }

  componentDidMount(){
    this.props.dispatch(fetchSources());
    this.props.dispatch(fetchTopHeadlines(this.props.currentSourceUrl));
  }

  handleScrollToSources() {
    console.log('app');
    scrollToComponent(this.bottom, {align: 'top'});
  }

  handleScrollToDisplay() {
    console.log('display');
    scrollToComponent(this.Display, {align: 'top'});
  }


  render(){
    console.log(process.env.API_KEY);
    const { sourcesObject, dispatch, currentSourceUrl, articlesObject } = this.props;
    return (
      <div>
        <TopNav ref={(section) => {this.TopNav = section; }} onScrollToSources={this.handleScrollToSources} onScrollToDisplay={this.handleScrollToDisplay}/>
        <DisplayContainer ref={(section) => { this.Display = section; }} articlesObject={articlesObject}/>
        <SideNav ref={(section) => {this.Sources = section; }} sourcesObject={sourcesObject}/>
        <h1 ref={(section) => {this.bottom = section}}></h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let sourceInfo;
  let articleInfo;
  let currentSourceUrl;

  const sourcesObject = state.savedSourceList[state.currentSourceListId];
  const articlesObject = state.savedArticleList[state.currentArticleListId];
  if(!state.savedSourceList[state.currentSourceListId].isFetching && !state.savedArticleList[state.currentArticleListId].isFetching){
    sourceInfo = {
      id: state.currentSourceListId,
      sources: sourcesObject.sources
    },
    articleInfo = {
      id: state.currentArticleListId,
      articles: articlesObject.articles
    };
  }
  else {
    sourceInfo = {
      sources: ''
    },
    articleInfo = {
      articles: ''
    };
  }
  return {
    sourcesObject: sourceInfo,
    articlesObject: articleInfo,
    currentSourceUrl: state.currentSourceUrl
  };
};

App.propTypes = {
  dispatch: PropTypes.func,
  sourcesObject: PropTypes.object,
  articlesObject: PropTypes.object,
  currentSourceUrl: PropTypes.string,
  onScrollToSources: PropTypes.func,
  onScrollToDisplay: PropTypes.func
};

export default connect(mapStateToProps)(App);
