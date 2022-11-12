import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'

const BodyCareFilter = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const [category , setCategory] = useState([]);

    const handleOnClick = (e) => {
        const newCategory = [...category];
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1)
        } else {
            newCategory.push(e.target.value)
        }
        setCategory(newCategory)
    }
    console.log(category);
  return (
    <div>
      <div>
         <h3>TOP OFFERS</h3>
         <input type="hidden" name="" />
         <p onClick={handleOnClick} >$3.95 All Body Lotion  <input type='none'
            value="$3.95 All Body Lotion"
            checked={category.includes("$3.95")}
             />
        </p>
           
         <p onClick={handleOnClick} value="Buy 3, Get 1 FREE Select Full-Size Body Care">Buy 3, Get 1 FREE Select Full-Size Body Care</p>
         <p onClick={handleOnClick} value="2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars">2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars</p>
      </div>
    </div>
  )
}

export default BodyCareFilter
