import React from 'react';
import './styles/TopNav.css';
import SearchBar from './SearchBar';

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
        <SearchBar />
        <div className='flex-box' >
          <span className='category'>Top Headlines</span>
          <span className='category'>All Articles</span>
        </div>
      </div>

    );

  }
}
export default TopNav;
