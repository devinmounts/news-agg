import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';

class SourcesContainer extends React.Component {
  constructor(props){
    super(props);
    const { sourcesObject } = props
  }

  sourceComponent() {
    Object.keys(this.props.sourcesObject.sources).map((sourceId) => {
      let source = this.props.sourcesObject.sources[sourceId]
      return console.log(source);
    });
  }
  // {sourcesObject.sources != undefined }
  // {Object.keys(sourcesObject.sources).map(function(id)
  //   {
  //     let source = sourceObject.sources[id];
  //   return <Source
  //             name = {source.name}
  //             key = {source.url}   />;
  //   })}

  render(){
    console.log(this.props);
    if(this.props.sourcesObject.sources != undefined){
      console.log('render');
      this.sourceComponent()
    }

    return(
      <div>

      </div>
    );
  }
}

export default SourcesContainer;
