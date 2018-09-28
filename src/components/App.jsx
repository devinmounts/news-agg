import React from 'react';
import FormField from './FormField';
import DisplayList from './DisplayList';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSources } from './../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    const { sourcesObject, dispatch } = props;
  }



  render(){
    return (
      <div>
        <SideNav sourcesObject={this.props.sourcesObject} />
        <TopNav />
        <DisplayList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  let info;
  let articleInfo;

  const sourcesObject = state.savedSourceList[state.currentSourceListId];
  // const articlesObject = state.savedArticleList[state.]
  if(!state.savedSourceList[state.currentSourceListId].isFetching){
    info = {
      id: state.currentSourceListId,
      sources: sourcesObject.sources
    };
  }
  else {
    info = {
      sources: ''
    };
  }
  return {
    sourcesObject: info
  };
};

App.propTypes = {
  sourcesObject: PropTypes.object
};

export default connect(mapStateToProps)(App);
