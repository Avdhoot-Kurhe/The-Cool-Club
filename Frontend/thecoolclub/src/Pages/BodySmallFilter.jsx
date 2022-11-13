import { Box, Divider, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./smallFilter.css";
const BodySmallFilter = () => {
  const handleSort = (e) => {};
  return (
    <>
      <HStack m="20px 0 30px 0">
        <HStack p="10px 1%" w="70%" bg="#f2f2f2" justifyContent="space-between">
          <span className="filter_by">Filter By :</span>
          <select
            style={{ borderBottom: "2px solid black" }}
            className="filter_select"
          >
            <option>Product Type</option>
            <option>Bar Soap</option>
            <option>Bath Accessories</option>
            <option>Bath Fizzy</option>
            <option>Bath Soak</option>
          </select>
          <select
            style={{ borderBottom: "2px solid black" }}
            className="filter_select"
          >
            <option>Fragnance Name</option>
            <option>A</option>
            <option>A Thousand Wishes</option>
            <option>After Dark</option>
            <option>Almond Blosson</option>
            <option>At the Beach</option>
          </select>
          <select
            style={{ borderBottom: "2px solid black" }}
            className="filter_select"
          >
            <option>Fragnance Category</option>
            <option>Citrus</option>
            <option> Floral</option>
            <option>Fresh</option>
            <option>Fruity </option>
            <option> Sweet</option>
            <option>Woodsy</option>
          </select>
        </HStack>
        <Flex w="30%" justifyContent="center" p="10px 1%">
          <select className="sort_select" onChange={(e) => handleSort(e)}>
            <option>SORT BY</option>
            <option value="asc">Price Low to high</option>
            <option value="desc">Price High to low</option>
          </select>
        </Flex>
      </HStack>
      <HStack
        p={"20px"}
        border="3px solid #f2f2f2"
        borderLeft="none"
        borderRight="none"
      >
        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/bopis-icon-small.svg?yocs=o_s_) no-repeat" />
        <Text fontSize="12px" color={"#005699"} fontWeight={"light"}>
          SHOP YOUR STORE:
        </Text>
        <Link fontSize="12px" color={"#005699"} fontWeight={"light"} href="/">
          Set Store
        </Link>
      </HStack>
    </>
  );
};

export default BodySmallFilter;
