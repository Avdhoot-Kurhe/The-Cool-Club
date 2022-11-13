import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const topOffers = [
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
  {
    text1: "All Candles",
    title: "Buy 1 Get 1 FREE",
    text2: "Lowest-priced item is free",
  },
];

const TopOffers = () => {
  return (
    <Center w="100%">
      <VStack>
        <Heading bg="#f2f2f2" fontSize="24px" textAlign="center" p="1%" w="62%">
          TODAY'S TOP OFFERS
        </Heading>
        <HStack
          overflow="hidden"
          bg="#f2f2f2"
          p="40px"
          w="62%"
          gap="30px"
          mt="none"
        >
          {topOffers.map((el) => {
            return (
              <Box textAlign="center">
                <VStack bg="white" p="40px">
                  <Text>{el.text1}</Text>
                  <Text fontWeight="bold">{el.title}</Text>
                  <Text>{el.text2}</Text>
                  <Button
                    _hover={{ color: "black", bg: "#f2f2f2" }}
                    p="20px 80px"
                    borderRadius="none"
                    color="white"
                    bg="black"
                    w="80%"
                  >
                    SHOP
                  </Button>
                </VStack>
              </Box>
            );
          })}
        </HStack>
      </VStack>
    </Center>
  );
};

export default TopOffers;
