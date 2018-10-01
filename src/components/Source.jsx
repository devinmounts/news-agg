import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';
import './styles/Source.css';

function Source(props) {
  const { name, url, dispatch, onHandleActiveSource, activeSource } = props;

  function updateUrl() {
    console.log('click', url);
    onHandleActiveSource(url);
    dispatch(updateCurrentSourceUrl(url));
  }


  return(
    <div className={url === activeSource ? 'active' : 'source'}>
    <span onClick={updateUrl}>{name}</span>
    </div>
  );
}

Source.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string,
  onHandleActiveSource: PropTypes.func,
  activeSource: PropTypes.string
};
export default connect()(Source);
