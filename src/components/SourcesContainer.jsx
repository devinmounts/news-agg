import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';
import { NavLink } from 'react-router-dom'

class SourcesContainer extends React.Component {
  constructor(props){
    super(props);
    const { sourcesObject } = props;
    this.state = {
      activeSource: false
    }
    this.handleActiveSource = this.handleActiveSource.bind(this);
  }

  handleActiveSource(){
    this.setState({
      activeSource: !this.state.activeSource
    });
    console.log(this.state)
  }

  render(){
    let sources = null;

    if(this.props.sourcesObject.sources != undefined){
      sources = Object.keys(this.props.sourcesObject.sources).map((sourceId) => {
        let source = this.props.sourcesObject.sources[sourceId];
        return <NavLink to={`/${source.id}`} key={source.id}><Source
          name = {source.name}
          url = {source.id}
          key = {source.id}
          onHandleActiveSource={this.handleActiveSource}/></NavLink>;
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
