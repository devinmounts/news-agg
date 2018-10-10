import React from 'react';
import './styles/TopNav.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import mapIcon from './../assets/images/map-icon.png';

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
      <div className='nav-image'>
        <div className='topNavStyle'>
          <img className='map-icon' src={mapIcon}/>
          <SearchBar />
          <Link className="login" to='/login'> Login</Link><Link className="login" to='/login'>Join </Link>
          <div className='flex-box' >
            <span href='#articles' onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='top-headlines' className={this.state.activeTab === 'top-headlines' ? 'activeTab' : 'category-one'}>Your Headlines</span>
            <span href='#sources' onClick={(e) => this.activateTab(e.target.attributes[0].value)} value='everything' className={this.state.activeTab === 'everything' ? 'activeTab' : 'category-two'}>Sources</span>
          </div>
        </div>
      </div>
    );

  }
}
export default TopNav;
