import React from 'react';
import { connect } from 'react-redux';
import { fetchSources, fetchTopHeadlines } from './../actions';
import PropTypes from 'prop-types';

function FormField(props) {
  const { dispatch, sourcesObject } = props
  console.log(props);
  return(
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(fetchSources())
      }}>
        <button type='submit'>Search</button>
      </form>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(fetchTopHeadlines());
      }}>
        <button type='submit'>Headlines</button>
      </form>

    </div>
  );
}

FormField.propTypes = {
  dispatch: PropTypes.func,
  sourcesObject: PropTypes.object,
};

export default connect()(FormField);
