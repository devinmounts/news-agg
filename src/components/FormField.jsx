import React from 'react';
import { connect } from 'react-redux';
import { fetchAddressRate } from './../actions';
import PropTypes from 'prop-types';

function FormField({ dispatch }) {
  let address;
  let rate;
  return(
    <div>
      <h3>Enter Search Category</h3>

    </div>
  );
}

FormField.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(FormField);
