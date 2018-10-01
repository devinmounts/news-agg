import React from 'react';
import './styles/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className='searchDiv'>
        <h1 className='header'>Search global news.</h1>
        <form>
          <input className='input'
           placeholder="e.g. Economic Analysis"
          />
        <button type='submit'>Search</button>
        </form>

      </div>
    );
   }


}

export default SearchBar;
