import React from 'react';
import FormField from './FormField';
import SourcesContainer from './SourcesContainer';
import PropTypes from 'prop-types';

function SideNav(props){
  const { sourcesObject } = props;

  let divStyle = {
    minWidth: '15%',
    height: 'calc(110vh - 50px)',
    border: 'solid black .5px',
    float: 'left',
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'aqua',
    overflow: 'scroll'

  };
  return(
    <div style={divStyle}>
      <FormField />
      <SourcesContainer sourcesObject={sourcesObject} />
    </div>
  );
}

SideNav.propTypes = {
  sourcesObject: PropTypes.object
};
export default SideNav;
