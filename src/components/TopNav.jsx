import React from 'react';
import './styles/TopNav.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import mapIcon from './../assets/images/map-icon.png';
import PropTypes from 'prop-types';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: ''
    };
    this.activateTab = this.activateTab.bind(this);
    this.handleScrollToSources = this.handleScrollToSources.bind(this);
    this.handleScrollToDisplay = this.handleScrollToDisplay.bind(this);
  }

  activateTab(value){
    this.setState({
      activeTab: value
    });
  }

  handleScrollToSources(){
    console.log('here');
    this.props.onScrollToSources();
  }

  handleScrollToDisplay(){
    this.props.onScrollToDisplay();
  }

  render(){
    return(
      <div className='nav-image'>
        <div className='topNavStyle'>
          <img className='map-icon' src={mapIcon}/>
          <SearchBar />
          <Link className="login" to='/login'> Login</Link><Link className="login" to='/login'>Join </Link>
          <div className='flex-box' >
            <span onClick={(e) => this.activateTab(e.target.attributes[0].value), this.handleScrollToDisplay} value='top-headlines' className={this.state.activeTab === 'top-headlines' ? 'activeTab' : 'category-one'}>Your Headlines</span>
            <span onClick={(e) => this.activateTab(e.target.attributes[0].value), this.handleScrollToSources} value='everything' className={this.state.activeTab === 'everything' ? 'activeTab' : 'category-two'}>Sources</span>
          </div>
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {
  onScrollToSources: PropTypes.func,
  onScrollToDisplay: PropTypes.func
}
export default TopNav;
