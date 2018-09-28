import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';

function Source(props) {
  const { name, url, dispatch } = props;
  function updateUrl() {
    dispatch(updateCurrentSourceUrl(url));
  }
  return(
    <div>
      <span onClick={updateUrl}>{name}</span>
    </div>
  );
}

Source.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string
};
export default connect()(Source);
