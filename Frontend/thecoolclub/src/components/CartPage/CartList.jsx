import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetToCart } from "../../Redux/AppReducer/action";
import { getCartDataApi } from "../../Redux/CartReducer/cart.actions";
import CartItem from "./CartItem";
import { useState } from "react";

const CartList = () => {
    // const[count,setCount] = React.useState(0);
    const [item, setItem] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();

    const {Bag,isLoading, isError,cart} = useSelector((state) => state.AppReducer);
    useEffect(() => {
      if(Bag.length == 0 || location) {
        dispatch(handleGetToCart())
      }
    },[dispatch, Bag.length])

    // console.log("store data",Bag)
    // console.log("cart data",cart)

    const getcartData = () => {
      axios.get(`https://thecoolclub.onrender.com/cart/`,{
        headers: {
          token: `Bearer ${localStorage.getItem("token")}`
        }})
        .then((res) => {
          console.log("cartdata",res);
          setItem(res.data);
        })
    }

    const deleteCartItem = (id) => {

      axios
      .delete(`https://thecoolclub.onrender.com/cart/${id}`, {
        headers: { token: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => getcartData())
      .catch((err) => console.log(err))
      // console.log(id)
      // dispatch(getCartDataApi(id));
    }
    useEffect(() => {
    getcartData()
    },[])
 
  return (
    <Box>
        <Flex justify='space-between' mt='20px'>
            <Heading size='md' w='35%'>Item</Heading>
            <Heading size='md'w='10%'>Price</Heading>
            <Heading size='md'w='10%'>Quantity</Heading>
            <Heading size='md'w='10%'>Total Price</Heading>
            <Heading size='md'w='10%'>Remove</Heading>
            </Flex>
            <Divider mt='0px'mb='20px' />
      {isLoading?'Loading....':isError?'something went wrong!':item?.map((item) => {
        return (
          <CartItem key={item._id} item={item}  deleteCartItem={(id) =>deleteCartItem(id)}/>
        );
      })}
    </Box>
  );
};

export default CartList;
