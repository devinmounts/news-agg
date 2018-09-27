import React from 'react';
import FormField from './FormField';
import DisplayList from './DisplayList';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { connect } from 'react-redux';

function App(){
  return (
    <div>
      <SideNav />
      <TopNav />
      <DisplayList />
    </div>
  );
}

const mapStateToProps = state => {
  console.log("Map to props", state)

}
export default connnect(mapStateToProps)(App);
