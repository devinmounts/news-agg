import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';

class SourcesContainer extends React.Component {
  constructor(props){
    super(props);
    const { sourcesObject } = props;
  }



  render(){
    let sources = null;

    if(this.props.sourcesObject.sources != undefined){
      sources = Object.keys(this.props.sourcesObject.sources).map((sourceId) => {
        let source = this.props.sourcesObject.sources[sourceId];
        return <Source
          name = {source.name}
          url = {source.id}
          key = {source.id} />;
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
