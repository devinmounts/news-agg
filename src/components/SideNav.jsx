import React from 'react';
import FormField from './FormField';
import SourcesContainer from './SourcesContainer';
import PropTypes from 'prop-types';
import './styles/SideNav.css';

function SideNav(props){
  const { sourcesObject } = props;


  return(
    <div className='sideNavStyle'>
      <FormField sourcesObject={sourcesObject} />
      <SourcesContainer sourcesObject={sourcesObject} />
    </div>
  );
}

SideNav.propTypes = {
  sourcesObject: PropTypes.object
};
export default SideNav;
