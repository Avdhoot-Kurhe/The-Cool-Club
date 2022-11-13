import React from 'react';
import { useState,useEffect } from 'react';
import './Bodycarepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProductsData } from "../Redux/AppReducer/action";
import BodyCareFilter from './BodyCareFilter';
import { Button } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const Bodycarepage = () => {

  const [product, setproduct] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.products);
  const initialCategoryParams = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryParams || []);
  const location = useLocation();
  const initialSortParams = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState("");


    useEffect(() => {
        fetch("https://thecoolclub.onrender.com/products/")
    .then((d) => d.json())
    
    .then((data) => {
        console.log("data",data)
        setproduct(data);
    })
    }, []);


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
    console.log("prdouct",product);
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
          {
            product?.map((item) => {
              return (
                <ProductCard key={item._id} item={item}/>
              )
            })
          }
        </div>
      </div>
    </div>                             
  )
}

export default Bodycarepage;