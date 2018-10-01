import React from 'react';
import './styles/TopNav.css';
import SearchBar from './SearchBar';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    }
    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(value){
    this.setState({
      activeTab: value
    })
  }

  render(){
    return(
      <div className='topNavStyle'>
        <SearchBar />
        <div className='flex-box' >
          <span onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='top-headlines' className={this.state.activeTab === 'top-headlines' ? 'activeTab' : 'category'}>Top Headlines</span>
          <span onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='everything' className={this.state.activeTab === 'top-headlines' ? 'activeTab' : 'category'}>All Articles</span>
        </div>
      </div>

    );

  }
}
export default TopNav;
