import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source';

function SourcesContainer(props) {
  const { sourcesObject } = props
  console.log(sourcesObject)
    return(
      <div>
        {props.sources}
        <Source />
      </div>

    );
  }

SourcesContainer.propTypes = {
  sourcesObject: PropTypes.object
}

export default SourcesContainer;
