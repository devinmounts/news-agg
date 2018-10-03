import React from 'react';
import './styles/SearchExpansion.css';

function SearchExpansion(props) {

    function handleFilterCategory(){

    }

    return (
      <div className='search-expansion' >
        <div className='date-div'>
          <span>From: </span><input type='date' /><br/>
          <span>To:</span><input className='to-date' type='date' />
        </div>


        <button className="buttonStyle"  value="city" onClick={handleFilterCategory}>City</button>
        <p className='inline-p'>Filter Options</p>
      </div>
    )
  }

export default SearchExpansion;
