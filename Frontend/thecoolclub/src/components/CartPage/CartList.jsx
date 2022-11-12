import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDataApi } from "../../Redux/CartReducer/cart.actions";
import CartItem from "./CartItem";

const CartList = () => {
    const[count,setCount] = React.useState(0);
  const {data,isLoading,isError} = useSelector((state) => state.cartReducer);
  console.log("store data",data)
  const dispatch = useDispatch();
  useEffect(() => {
      if(data.length===0){
          console.log('bd:',data)
          dispatch(getCartDataApi())
          
        }
    },[]);

    // useEffect(() => {
    //     console.log("datainre",data)
    //     setCount(0);
    // },[data])
    // console.log("store data",data)
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
      {isLoading?'Loading....':isError?'something went wrong!':data?.map((item) => {
        return (
          <CartItem key={item._id} product={item}  />
        );
      })}
    </Box>
  );
};

export default CartList;
