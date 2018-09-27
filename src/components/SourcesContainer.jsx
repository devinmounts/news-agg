import React from 'react';
import PropTypes from 'prop-types';

function SourcesContainer(props) {
  console.log(props)

  function onUpdate() {
  sourcesObject.sources.map((id) => {
    console.log(id);
    });
  }



    return(
      <div>
        Sources Works
      </div>

    );
  }

SourcesContainer.propTypes = {
  sourcesObject: PropTypes.object
}

export default SourcesContainer;
