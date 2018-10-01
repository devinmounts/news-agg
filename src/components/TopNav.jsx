import React from 'react';
import './styles/TopNav.css';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    }
  }

  render(){
    return(
      <div className='topNavStyle'>
        <span className='category'>Top Headlines</span>
        <span className='category'>All Articles</span>
      </div>
    );

  }
}
export default TopNav;
