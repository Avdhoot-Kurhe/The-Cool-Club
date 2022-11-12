import React from 'react'
import './smallFilter.css'
const BodySmallFilter = () => {

    const handleSort = (e) => {

    }
  return (
    <div className="filter_sort_contaier">
          <div className="filter_div">
            <span className="filter_by">Filter By :</span>
           <span className='select_tag'>
           <select className="filter_select">
              <option>Product Type</option>
              <option>Bar Soap</option>
              <option>Bath Accessories</option>
              <option>Bath Fizzy</option>
              <option>Bath Soak</option>
            </select>
            </span>
            <span className='select_tag'>
            <select className="filter_select">
              <option>Fragnance Name</option>
              <option>A</option>
              <option>A Thousand Wishes</option>
              <option>After Dark</option>
              <option>Almond Blosson</option>
              <option>At the Beach</option>
            </select>
            </span>

            <span className='select_tag'>
            <select className="filter_select">
              <option>Fragnance Category</option>
              <option>Citrus</option>
              <option> Floral</option>
              <option>Fresh</option>
              <option>Fruity </option>
              <option> Sweet</option>
              <option>Woodsy</option>
            </select>
            </span>
          
          </div>
          <div className="sort_div">
            <select
              className="sort_select"
              onChange={(e) => handleSort(e)}>
              <option>SORT BY</option>
              <option value="asc">Price Low to high</option>
              <option value="desc">Price High to low</option>
            </select>
          </div>
        </div>
  )
}

export default BodySmallFilter