import React from 'react';
import FormField from './FormField';
import DisplayList from './DisplayList';
import SideNav from './SideNav';
import TopNav from './TopNav';

function App(){
  return (
    <div>
      <SideNav />
      <TopNav />
      <DisplayList />
    </div>
  );
}

export default App;
