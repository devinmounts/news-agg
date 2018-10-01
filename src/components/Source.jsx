import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentSourceUrl } from './../actions';
import './styles/Source.css';

function Source(props) {
  const { name, url, dispatch, onHandleActiveSource } = props;
  console.log(onHandleActiveSource)

  function updateUrl() {
    onHandleActiveSource()
    dispatch(updateCurrentSourceUrl(url));
  }


  return(
    <div className='source'>
    <span onClick={updateUrl}>{name}</span>
    </div>
  );
}

Source.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.string,
  onHandleActiveSource: PropTypes.func
};
export default connect()(Source);
