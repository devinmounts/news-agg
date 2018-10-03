import React from 'react';
import './styles/TopNav.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    };
    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(value){
    this.setState({
      activeTab: value
    });
  }
  // <span onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='top-headlines' className={this.state.activeTab === 'top-headlines' ? 'activeTab' : 'category-one'}>Top Headlines</span>
  // <span onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='everything' className={this.state.activeTab === 'everything' ? 'activeTab' : 'category-two'}>All Articles</span>

  render(){
    return(
      <div className='topNavStyle'>
        <SearchBar />
        <Link className="login" to='/login'> Login</Link><Link className="login" to='/login'>Join </Link>
        <div className='flex-box' >
        </div>
      </div>

    );

  }
}
export default TopNav;
