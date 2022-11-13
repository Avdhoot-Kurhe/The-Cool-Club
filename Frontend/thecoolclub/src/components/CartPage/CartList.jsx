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
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();

    const {Bag,isLoading, isError,cart} = useSelector((state) => state.AppReducer);
    useEffect(() => {
      if(Bag.length == 0 || location) {
        dispatch(handleGetToCart())
      }
    },[dispatch, Bag.length])


    const getcartData = () => {
      axios.get(`https://thecoolclub.onrender.com/cart/`,{
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        .then((res) => {
          console.log("cartdata",res.data);
          setCartItem(res.data);
          
        })
    }
//  console.log(cartItem);
    const deleteCartItem = (id) => {
      console.log(id)
      axios
      .delete(`https://thecoolclub.onrender.com/cart/${id}`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => getcartData())
      .catch((err) => console.log(err))
      // console.log(id)
      // dispatch(getCartDataApi(id));
    }
    
    // console.log("item",cartItem)
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
      {cartItem.length > 0 &&  cartItem?.map((item) => {
        return (
          <Box border="1px solid black" mt="0.7rem" key={item._id}>
          <CartItem key={item._id} item={item}  deleteCartItem={(id) =>deleteCartItem(id)}/>
          </Box>
        );
      })}
    </Box>
  );
};

export default CartList;
