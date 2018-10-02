import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';
import { NavLink } from 'react-router-dom';
import './styles/Source.css';

class SourcesContainer extends React.Component {
  constructor(props){
    super(props);
    const { sourcesObject } = props;
    this.state = {
      activeSource: ''
    };
    this.handleActiveSource = this.handleActiveSource.bind(this);
  }

  handleActiveSource(sourceId){
    this.setState({
      activeSource: sourceId
    });
  }

  render(){
    console.log('SourcesContainer', this.props);
    let sources = null;

    if(this.props.sourcesObject.sources != undefined){
      sources = Object.keys(this.props.sourcesObject.sources).map((sourceId) => {
        let source = this.props.sourcesObject.sources[sourceId];
        return  <Source
          name = {source.name}
          url = {source.id}
          key = {source.id}
          activeSource = {this.state.activeSource}
          onHandleActiveSource={this.handleActiveSource}/>;
      });
    }
    return(
      <div >
        {sources != null ? sources : ''}
      </div>
    );
  }
}

export default SourcesContainer;
