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
    <div className='source' >
      <style jsx>{`
          .source {
            background-color: #153042;
            margin: 3px;
            padding: 3px;
            border: solid black 1px;
            border-radius: 5px;
            color: white;
          }
          div:hover {
            background-color: #eb803c
          }
      `}</style>
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
