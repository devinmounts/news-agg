import React from 'react';
import './styles/SearchBar.css';
import search from './../assets/images/search.png';
import { fetchArticlesByUserSearch } from './../actions';
import SearchExpansion from './SearchExpansion';
import { connect } from 'react-redux';

function SearchBar({dispatch}) {
  let input;
  return(
    <div className='searchDiv'>
      <h1 className='header'>Search global news.</h1>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchArticlesByUserSearch(input.value.trim()));
      }}>
        <input className='input'
          ref={node => {input = node;}}
          placeholder="e.g. Economic Analysis"
        />
        <button className='button' type='submit'><img className='icon'src={search}/></button>
      </form>
      <SearchExpansion />
    </div>
  );
}

export default connect()(SearchBar);
