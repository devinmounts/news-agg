import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';

class SourcesContainer extends React.Component {
  constructor(props){
    super(props);
    const { sourcesObject } = props;
  }



  render(){
    let divStyle = {
      overflow: 'scroll',
      backgroundColor: 'green'
    };
    
    let sources = null;

    if(this.props.sourcesObject.sources != undefined){
      sources = Object.keys(this.props.sourcesObject.sources).map((sourceId) => {
        let source = this.props.sourcesObject.sources[sourceId];
        return <Source
          name = {source.name}
          url = {source.url}
          key = {source.id} />;
      });
    }
    console.log(sources);
    return(
      <div style={divStyle}>
        {sources != null ? sources : ''}
      </div>
    );
  }
}

export default SourcesContainer;
