import React from 'react';
import { connect } from 'react-redux';
import { fetchSources } from './../actions';
import PropTypes from 'prop-types';

function FormField({ dispatch }) {

  return(
    <div>
      <h3>Enter Search Category</h3>
      <form onSubmit={e => {
          e.preventDefault();
          dispatch(fetchSources())
        }}>
        <button type='submit'>Search</button>
      </form>

    </div>
  );
}

FormField.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(FormField);
