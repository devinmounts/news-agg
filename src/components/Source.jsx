import React from 'react';
import PropTypes from 'prop-types';

function Source(props) {
  const { name, url } = props;
  return(
    <div>
      <span key={url}>{name}</span>
    </div>
  );
}

Source.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string
}
export default Source;
