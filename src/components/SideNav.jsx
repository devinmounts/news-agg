import React from 'react';
import FormField from './FormField';
import SourcesContainer from './SourcesContainer';
import PropTypes from 'prop-types';
import './styles/SideNav.css';

function SideNav(props){
  const { sourcesObject, currentSourceUrl } = props;

  // <FormField sourcesObject={sourcesObject} currentSourceUrl={currentSourceUrl} />
  return(
    <div className='side-nav-style'>
      <h1 className='sources-header'>Top News Sources</h1>
      <SourcesContainer sourcesObject={sourcesObject} currentSourceUrl={currentSourceUrl}/>
    </div>
  );
}

SideNav.propTypes = {
  sourcesObject: PropTypes.object,
  currentSourceUrl: PropTypes.string
};
export default SideNav;
