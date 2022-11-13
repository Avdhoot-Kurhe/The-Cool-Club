import React from 'react';
import { useState,useEffect } from 'react';
import './Bodycarepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProductsData } from "../Redux/AppReducer/action";
import BodyCareFilter from './BodyCareFilter';
import BodySmallFilter from './BodySmallFilter';
import axios from 'axios';

const Bodycarepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {products} = useSelector((store) => store.AppReducer);
  const initialCategoryParams = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryParams || []);
  const location = useLocation();
  const initialSortParams = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState("");


    useEffect(() => {
     if(products.length === 0) {
      dispatch(getProductsData()).then((res) => {
        console.log("res",res.data)
      })
     }
    })
   
    useEffect(() => {
        if (category || sortBy) {
          setSearchParams({ category: category, sortBy: sortBy });
        }
      }, [category, setSearchParams, sortBy]);
    
      useEffect(() => {
        if (products.length === 0 || location) {
          const sortBy = searchParams.get("sortBy");
          const queryParams = {
            params: {
              category: searchParams.getAll("category"),
              _sort: sortBy && `price`,
              _order: sortBy,
            },
          };
          dispatch(getProductsData(queryParams))
        }
      }, []);


      const handleAddToCart = (item) => {
        axios.post(`https://thecoolclub.onrender.com/cart/addtocart`,item,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }}).then((res) => {
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          })
      }

      // const handleChange = (e) => {
      //   const option = e.target.value;
    
      //   let newCategory = [...category];
      //   if (category.includes(option)) {
      //     newCategory.splice(newCategory.indexOf(option), 1);
      //   } else {
      //     newCategory.push(option);
      //   }
      //   setCategory(newCategory);
      // };
    
      // const handleSort = (e) => {
      //   setSortBy(e.target.value);
      // };
  
  return (
    <div> 
      <div className='BodyCare_main_Div'>
        <div className='BodyCare_main_Div_leftSide'>
          <BodyCareFilter />
        </div>
        <div className='BodyCare_main_Div_RightSide'>
          <div >
              <h3 style={{fontSize:"1.5rem", fontWeight:'bold'}}>All Body Care</h3>
              <p style={{border:'1px solid black', backGround:"black"}}></p>
              <BodySmallFilter />
          </div>
          <div className='BodyCare_main_Div_RightSide_mapDiv'>
          {
            products?.map((item) => {
              return (
                <div className='BodyCare_main_Div_AllProducts'>
                  <Link to={`/bodyCare/${item._id}`}>
                   <img src={item.productimageurl} alt={item.title} />
                   <p className='title_Div'>{item.title}</p>
                   <p className='substitle_Div'>{item.subtitle}</p>
                   <p className='price_Div'>{"$"}{item.price}</p>
                   <p className='mixmatch_Div'>{item.mixnmatch}</p>
                   </Link>
                   <div className='addToBag_button_main_Div'>
                     <button onClick={() => handleAddToCart(item)}>ADD TO BAG</button>
                   </div>
                </div>
              )
            })
          }
          </div>
          
        </div>
      </div>
    </div>                             
  )
}

export default Bodycarepage;