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
    scrollToComponent(this.DisplayContainer, {align: 'top'});
  }

  handleScrollToDisplay() {
    console.log('onScrollToDisplay');
    scrollToComponent(this.Sources, {align: 'middle'});
  }




  render(){
    const { sourcesObject, dispatch, currentSourceUrl, articlesObject } = this.props;

    return (
      <div>
        <TopNav ref={(section) => {this.TopNav = section; }} onScrollToSources={this.handleScrollToSources} onScrollToDisplay={this.handleScrollToDisplay}/>
        <DisplayContainer ref={(section) => {this.DisplayContainer = section; }} articlesObject={articlesObject}/>
        <SideNav ref={(section) => {this.Sources = section; }} sourcesObject={sourcesObject}/>
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
