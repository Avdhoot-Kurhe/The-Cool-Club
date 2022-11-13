import { Box, Button, Divider, Flex, Input, Spacer, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
const [tota,setTota]=useState([]);
const navigate = useNavigate();

    const getcartData = () => {
        axios.get(`https://thecoolclub.onrender.com/cart/`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
          }})
          .then((res) => {
            console.log("cartdata",res.data);
            setTota(res.data);
            
          })
      }
    var total = 0;
 
    const sum = tota.map((curr) =>{
        return (
            total = total + Number(curr.price)
        )
    })

    useEffect(() => {
        getcartData()
        },[sum]);

    return (
        <>
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
                <Text>{total}</Text>
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
        <Box textAlign='center' mt="1.5rem">
            <Button background="black" color="white" onClick={() => {
                navigate("/billing")
            }}>Go To Payment </Button>
        </Box>
        </>
    );
};

export default Checkout;