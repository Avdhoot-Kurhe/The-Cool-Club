import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartDataApi } from '../Redux/CartReducer/cart.actions';
import '../Pages/Bodycarepage.css';
const ProductCard = ({item}) => {
    const dispatch=useDispatch();

const addTocart=()=>{
    let payload={
        productid: item._id,quantity:1,deliveryType:"shipit"
    }
    dispatch(addToCartDataApi(payload));
}

    return (
        <div className='BodyCare_main_Div_AllProducts'>
                   <img src={item.productimageurl} alt={item.title} />
                   <p>{item.title}</p>
                   <p>{item.subtitle}</p>
                   <p>{item.price}</p>
                   <p>{item.mixmatch}</p>
                   <div>
                     <Button onClick={addTocart}>Add to bag</Button>
                   </div>
                </div>
    );
};

export default ProductCard;