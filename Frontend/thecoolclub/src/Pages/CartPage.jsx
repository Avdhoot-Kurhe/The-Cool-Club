import { Container, Divider, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import CartList from '../components/CartPage/CartList';
import Checkout from '../components/CartPage/Checkout';
import {  getCartDataApi } from '../Redux/CartReducer/cart.actions';

const CartPage = () => {
    const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getCartDataApi());
},[]);



    return (
        <Container maxW='70%'>
            <Text fontSize='xx-large'>Shoping Bag</Text>
            <Divider/>
            <CartList/>
            <Checkout/>
        </Container>
    );
};

export default CartPage;