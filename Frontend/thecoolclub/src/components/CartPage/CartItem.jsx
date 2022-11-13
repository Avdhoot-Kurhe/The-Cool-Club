import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartDataApi } from "../../Redux/AppReducer/action";
import { updateCartApi } from "../../Redux/CartReducer/cart.actions";

const CartItem = ({item,deleteCartItem}) => {
  console.log(item);
  const dispatch = useDispatch();
  const updateQuantity = (id, count) => {
      let payload = {
        id,
        count,
      };
    
  };
  const onDeleteHandle = (id) => {
    deleteCartItem(id)
  };

  return (
    <Flex
      gap="60px"
      w="100%"
      h="100%"
      align="center"
      bg="#f7f7f7"
      borderWidth="2px"
      borderColor="#f2f2f2"
      px='20px'
    >
      <Box width="150px">
        <Image src={item.productimageurl} maxW="100%" alt="product-image" />
      </Box>
      <Box w='20%'>
        <Text fontWeight="600">{item.title}</Text>
        <Text>{item.subtitle}</Text>
        <Text color="#e10068">
  
        </Text>
      </Box>
      <Box width="10%">
        <Text fontSize="20px" fontWeight="600">
          $ {item.price}
        </Text>
      </Box>
      
      <Flex align="center" w='20%'>
        <Button
          onClick={() => updateQuantity(-1)}
          disabled={item.purchasequantity === 1}
          colorScheme='gray'
          fontSize="20px"
          p="10px 0"
        >
          -
        </Button>
        <Flex m="0 10px" fontWeight="600" width="20px" justify="center">
          {1}
        </Flex>
        
        <Button
          onClick={() => updateQuantity(1)}
          colorScheme='gray'
          fontSize="20px"
          p="10px 0"
        >
          +
        </Button>
      </Flex>
        <Box w='10%'>
        <Text fontWeight={600} fontSize="20px">
          ${item.price}
        </Text>
      </Box>
        <Button
          className="fas fa-trash"
          style={{
            color: "#e10068",
            fontSize: "20px",
            marginLeft: "20px",
            backgroundColor: "#fff",
            width: "40px",
            padding: "10px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
            cursor: "pointer",
          }}
          onClick={() => onDeleteHandle(item.productid)}
        >X</Button>
      
    </Flex>
  );
};

export default CartItem;
