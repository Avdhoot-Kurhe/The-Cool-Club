import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'
import './smallFilter.css'

const BodyCareFilter = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const [category , setCategory] = useState([]);

    // const handleOnClick = (e) => {
    //     const newCategory = [...category];
    //     if(newCategory.includes(e.target.value)){
    //         newCategory.splice(newCategory.indexOf(e.target.value),1)
    //     } else {
    //         newCategory.push(e.target.value)
    //     }
    //     setCategory(newCategory)
    // }
    // console.log(category);

    const topOffer = [
      {
        id:1,
        name : "$3.95 All Body Lotion"
      },
      {
        id:2,
        name : "Buy 3, Get 1 FREE Select Full-Size Body Care"
      },
      {
        id:3,
        name : "2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars"
      },
      {
        id:4,
        name : "Buy 3, Get 1 FREE Travel, Hand & Lip Care"
      },
    ]

    const bathandShower = [
      {
        id:1,
        name:"All Bath & Shower"
      },
      {
        id:2,
        name:"Body Wash & Shower Gel"
      },
      {
        id:3,
        name:"Body Scrub"
      }
    ]

    const moisturizers = [
      {
        id:1,
        name:"All Moisturizers"
      },
      {
        id:2,
        name:"Body Lotion"
      },
      {
        id:3,
        name:"Body Cream"
      },

    ]

    const fragrance = [
      {
        id:1,
        name:"All Fragrance"
      },
      {
        id:2,
        name:"Body Sprays & Mists"
      },
      {
        id:3,
        name:"Perfume & Cologne"
      },
    ]
  return (
    <div>
        <div>
           <p>TOP OFFERS</p>
           <div>
            {
              topOffer.map((item) => (
                <div key={item.id} className="topOfferss_div">{item.name}</div>
              ))
            }
           </div>
        </div>

        <div style={{marginTop:"4rem"}}>
           <p>BATH & SHOWER</p>
           <div>
            {
              bathandShower.map((item) => (
                <div key={item.id} className="topOfferss_div">{item.name}</div>
              ))
            }
           </div>
          </div>

           <div style={{marginTop:"2.5rem"}}>
           <p>MOISTURIZERS</p>
           <div>
            {
              moisturizers.map((item) => (
                <div key={item.id} className="topOfferss_div">{item.name}</div>
              ))
            }
           </div>
        </div>

        <div style={{marginTop:"2.5rem"}}>
           <p>FRANGRANCE</p>
           <div>
            {
              fragrance.map((item) => (
                <div key={item.id} className="topOfferss_div">{item.name}</div>
              ))
            }
           </div>
        </div>
    </div>
  )
}

export default BodyCareFilter
