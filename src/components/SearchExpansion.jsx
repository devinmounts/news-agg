import React from 'react';
import './styles/SearchExpansion.css';
import PropTypes from 'prop-types';

function SearchExpansion(props) {
  let dateFrom;
  let dateTo;
  let sortFilter;

  function handleFromDate(e){
    dateFrom = e.target.value;
    props.onHandleDateFrom(dateFrom);
  }

  function handleToDate(e){
    dateTo = e.target.value;
    props.onHandleDateTo(dateTo);
  }

  function handleSortFilter(e){
    sortFilter = e.target.value;
    props.onHandleSortFilter(sortFilter);
  }


  return (
    <div className='search-expansion' >
      <h5 className='filter-title'>Filter Options:</h5>
      <div className='date-div'>
        <span>From: </span><input onChange={handleFromDate} ref={node => {dateFrom = node;}} className='from-date' type='date' /><br/>
        <span>To:</span><input onChange={handleToDate} ref={node => {dateTo = node;}} className='to-date' type='date' />
      </div>
      <div className='sort-filter'>
        <select onChange={handleSortFilter} ref={node =>{sortFilter = node;}}>
          <option value=''>Sort By</option>
          <option value='relevancy'>Most Relevant</option>
          <option value='popularity'>Popular Sources</option>
          <option value='publishedAt'>Most Recent</option>
        </select>

      </div>
    </div>
  );
}

SearchExpansion.propTypes = {
  onHandleDateFrom: PropTypes.func,
  onHandleDateTo: PropTypes.func,
  onHandleSortFilter: PropTypes.func
};

export default SearchExpansion;
