import React from 'react';
import './styles/SearchBar.css';
import search from './../assets/images/search.png';
import { fetchArticlesByUserSearch } from './../actions';
import SearchExpansion from './SearchExpansion';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    let text = null;
    let dateFrom = null;
    let dateTo = null;
    let sortFilter = null;

    this.state = {
      expansionVisible: false
    };
    this.handleDateFrom = this.handleDateFrom.bind(this);
    this.handleDateTo = this.handleDateTo.bind(this);
    this.handleSortFilter = this.handleSortFilter.bind(this);
    this.handleExpansionVisible = this.handleExpansionVisible.bind(this);
  }


  handleDateFrom(selectedDateFrom){
    this.dateFrom = selectedDateFrom;
  }

  handleDateTo(selectedDateTo){
    this.dateTo = selectedDateTo;
  }

  handleSortFilter(selectedSortFilter){
    this.sortFilter = selectedSortFilter;
  }

  handleExpansionVisible(){
    this.setState({
      expansionVisible: !this.state.expansionVisible
    });
  }

  render(){
    let expansionShow = null;
    if(this.state.expansionVisible){
      expansionShow = <SearchExpansion onHandleDateFrom={this.handleDateFrom} onHandleDateTo={this.handleDateTo} onHandleSortFilter={this.handleSortFilter} />;
    }
    const { dispatch } = this.props;
    return(
      <div className='searchDiv'>
        <div className='header-div'>
          <h1 className='header-text'>Above the fold.</h1>
          <h2 className='header-text'>your source for global news</h2>
        </div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!this.text.value.trim()) {
            return;
          }
          dispatch(fetchArticlesByUserSearch(this.text.value.trim(), this.dateFrom, this.dateTo, this.sortFilter));
        }}>
          <input onClick={this.handleExpansionVisible}className='input'
            ref={node => {this.text = node;}}
            placeholder="e.g. Net neutrality"
          />
          <button onClick={this.handleExpansionVisible} className='button' type='submit'><img className='icon'src={search}/></button>
        </form>
        {expansionShow}
      </div>
    );
  }
}

SearchBar.propTypes = {
  dispatch: PropTypes.func
}


export default connect()(SearchBar);
