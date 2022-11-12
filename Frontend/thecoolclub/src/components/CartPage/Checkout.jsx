import { Button, Divider, Flex, Input, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartDataApi } from '../../Redux/CartReducer/cart.actions';

const Checkout = () => {
const [total,setTotal]=useState(28);
const [subtotal,setSubTotal]=useState(26);
    const {data} = useSelector((state) => state.cartReducer)||[];
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   if(data.length===0){
  
    //       dispatch(getCartDataApi());
    //   }
    // },[data.length,dispatch]);


    // const sum = data.reduce((pre,cur) =>   pre + (cur.price*cur.purchasequantity),0)
    // setSubTotal(sum);
    // setTotal(sum);

    return (
        <Flex pt="50px">
        <Stack w="35%" borderWidth="2px" borderColor="#f2f2f2" p="30px" spacing="10px">
            <Text fontWeight="600">PROMOTION CODE</Text>
            <Text>Only one code can be applied per order.</Text>
            <Flex>
                <Input borderRadius="0px"/>
                <Button bg="#000" color="#fff" _hover={{bg : "#e10068"}} borderRadius="0px">Apply</Button>
            </Flex>
        </Stack>
        <Stack w="50%" ml="15%" borderWidth="2px" borderColor="#f2f2f2" p="30px">
            <Flex>
                <Text>Subtotal</Text>
                <Spacer />
                <Text>{subtotal}</Text>
            </Flex>
             <Flex>
                <Text>tax</Text>
                <Spacer />
                <Text>2</Text>
            </Flex>
             <Flex>
                <Text>Coupon Code Discount</Text>
                <Spacer />
                <Text>- 0</Text>
            </Flex>
             <Flex>
                <Text fontSize="25px">Total</Text>
                <Spacer />
                <Divider  />
                <Text fontSize="25px">{total}</Text>
            </Flex>
        </Stack>
        </Flex>
    );
};

export default Checkout;