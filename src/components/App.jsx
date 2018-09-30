import React from 'react';
import FormField from './FormField';
import DisplayContainer from './DisplayContainer';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSources, fetchTopHeadlines } from './../actions';

import './styles/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const { sourcesObject, dispatch } = props;

  }

  render(){
    return (
      <div>
        <SideNav sourcesObject={this.props.sourcesObject} currentSourceUrl={this.props.currentSourceUrl} />
        <TopNav />
        <DisplayContainer articlesObject={this.props.articlesObject}/>
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
    }
  }
  return {
    sourcesObject: sourceInfo,
    articlesObject: articleInfo,
    currentSourceUrl: state.currentSourceUrl
  };
};

App.propTypes = {
  sourcesObject: PropTypes.object,
  articlesObject: PropTypes.object,
  currentSourceUrl: PropTypes.string
};

export default connect(mapStateToProps)(App);
