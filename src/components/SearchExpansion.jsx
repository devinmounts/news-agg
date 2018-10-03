import React from 'react';
import './styles/SearchExpansion.css';
import PropTypes from 'prop-types';

function SearchExpansion(props) {
  console.log(props)
  let dateFrom;
  let dateTo;
  function handleFromDate(e){
    dateFrom = e.target.value;
    props.onHandleDateFrom(dateFrom);
  }

  function handleToDate(e){
     dateTo = e.target.value
    props.onHandleDateTo(dateTo);
  }

//   <select >
//     <option>Sort By</option>
//     <option value='relevancy'>Most Relevant</option>
//     <option value='popularity'>Popular Sources</option>
//     <option value='publishedAt'>Most Recent</option>
//   </select>
// </div>



  return (
    <div className='search-expansion' >
      <div className='date-div'>
        <span>From: </span><input onChange={handleFromDate} ref={node => {dateFrom = node}} type='date' /><br/>
        <span>To:</span><input onChange={handleToDate} ref={node => {dateTo = node}} className='to-date' type='date' />
      </div>
      <div>
      <p className='inline-p'>Filter Options</p>
      </div>
    </div>
  )
}

SearchExpansion.propTypes = {
  onHandleDateFrom: PropTypes.func,
  onHandleDateTo: PropTypes.func
}

export default SearchExpansion;
