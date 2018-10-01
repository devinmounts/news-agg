import React from 'react';
import DisplayContainer from './DisplayContainer';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { fetchSources, fetchTopHeadlines } from './../actions';

import './styles/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const { sourcesObject, dispatch, currentSourceUrl, match } = props;

  }
  componentDidMount(){
    console.log('mounted');
    this.props.dispatch(fetchSources());
    this.props.dispatch(fetchTopHeadlines(this.props.currentSourceUrl));

  }

  render(){
    console.log(this.props)
    return (
      <div>
        <SideNav sourcesObject={this.props.sourcesObject} currentSourceUrl={this.props.currentSourceUrl} />
        <TopNav />
        <Switch>
          <Route exact path='/' render={() =><DisplayContainer articlesObject={this.props.articlesObject}/>} />
          <Route path='/test' component={DisplayContainer} />
          <Route path={this.props.currentSourceUrl != null ? `/${this.props.currentSourceUrl}` : '/'} render={() =><DisplayContainer articlesObject={this.props.articlesObject}/>} />
        </Switch>
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
  sourcesObject: PropTypes.object,
  articlesObject: PropTypes.object,
  currentSourceUrl: PropTypes.string
};

export default connect(mapStateToProps)(App);
