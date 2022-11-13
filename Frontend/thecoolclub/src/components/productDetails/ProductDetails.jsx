import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProductsData } from '../../Redux/AppReducer/action';
import './ProductDetailsPage.css'

const ProductDetails = () => {
    const [currentPro , setCurrentPro] = useState([]);
    const {products} = useSelector((state) => state.AppReducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const location = useLocation();

    const [count, setCount] = useState(1)

    const handleCount = (num) => {
        console.log(num);
        if(num == 0) {
            count = 0
        } else {
            setCount(count + num)
        }
    }

    console.log("id",id);
    useEffect(()=> {
       if(products.length > 0 || location) {
        dispatch(getProductsData());
       }
    },[])

    useEffect(() => {
        if(id){
            const currentProduct = products.find((item) => item._id == id);
            console.log("currentProduct",currentProduct);
            currentPro && setCurrentPro(currentProduct)
        }
    },[currentPro])
  return (
    <div className='DetailsProduct_main_Div'>
        <div className='DetailsProduct_main_Div_left'>
            <img src={currentPro.productimageurl} alt="" />
        </div>
        <div className='DetailsProduct_main_Div_right'>
            <div>
                <p className='productName'>{currentPro.title}</p>
                <p className='subtitle'>{currentPro.subtitle}</p>
                <p className='price'>{"$"}{currentPro.price}</p>
                <p className='quanitity'>{currentPro.quantity}</p>
                 <p className='mixmatch'>{currentPro.mixnmatch}</p>
                 <p>Details</p>
            </div>

            <div className='howDoYou_div'>
                <p style={{paddingTop:"0.5rem"}}>How do you want to receive it?</p>
                <div className='radioSpan_Div'>
                    <input type="radio" />
                    <span className='margin'>
                        <p>Ship it</p>
                        <p style={{fontSize:"0.9rem"}}>Available</p>
                    </span>
                </div>

                <div className='radioSpan_Div'>
                    <input type="radio" />
                    <span className='margin'>
                        <p>Pick Up in Store</p>
                        <p style={{fontSize:"0.9rem"}}>Set Store</p>
                    </span>
                </div>
            </div>

            <div className='addBag_div'>
                <div onClick={() => handleCount(-1) } className="minus_Div">{"-"}</div>
                <div className='minus_Div'>{count}</div>
                <div onClick={() => handleCount(+1)} className="minus_Div">{"+"}</div>
                <div>
                    <button className='addBtn'>ADD TO BAG</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails