import React from 'react';
import './styles/SearchBar.css';
import search from './../assets/images/search.png';
import { fetchArticlesByUserSearch } from './../actions';
import SearchExpansion from './SearchExpansion';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    let text = null;
    let dateFrom = null;
    let dateTo = null;

    this.state = {
      expansionVisible: false
    }
    this.handleDateFrom = this.handleDateFrom.bind(this);
    this.handleDateTo = this.handleDateTo.bind(this);
    this.handleExpansionVisible = this.handleExpansionVisible.bind(this);
  }


  handleDateFrom(selectedDateFrom){
    this.dateFrom = selectedDateFrom
  }

  handleDateTo(selectedDateTo){
    this.dateTo = selectedDateTo
  }

  handleExpansionVisible(){
    this.setState({
      expansionVisible: !this.state.expansionVisible
    });
  }

  render(){
    let expansionShow = null;
    if(this.state.expansionVisible){
      expansionShow = <SearchExpansion onHandleDateFrom={this.handleDateFrom} onHandleDateTo={this.handleDateTo} />
    }
    const { dispatch } = this.props
    return(
      <div className='searchDiv'>
        <h1 className='header'>Search global news.</h1>
        <form onSubmit={e => {
          e.preventDefault();
          if (!this.text.value.trim()) {
            return;
          }
          dispatch(fetchArticlesByUserSearch(this.text.value.trim(), this.dateFrom, this.dateTo));
        }}>
          <input onClick={this.handleExpansionVisible}className='input'
            ref={node => {this.text = node;}}
            placeholder="e.g. Economic Analysis"
          />
        <button onClick={this.handleExpansionVisible}className='button' type='submit'><img className='icon'src={search}/></button>
        </form>
        {expansionShow}
      </div>
    );
  }
}


export default connect()(SearchBar);
