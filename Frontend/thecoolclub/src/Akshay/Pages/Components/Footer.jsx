import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const socialMedia = [
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-fb-reverse.svg?yocs=o_s_",
    color: "#3460a1",
  },
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-twitter-reverse.svg?yocs=o_s_",
    color: "#28aae1",
  },
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-ig-reverse.svg?yocs=o_s_",
    color: "#35648b",
  },
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-tiktok-reverse.svg?yocs=o_s_",
    color: "black",
  },
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-youtube-reverse.svg?yocs=o_s_",
    color: "red",
  },
  {
    link: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/Social-pinterest-reverse.svg?yocs=o_s_",
    color: "#ce2129",
  },
];

const footerLinks = [
  [
    { text: "CUSTOMER CARE" },
    { text: "Help & FAQs" },
    { text: "Shipping" },
    { text: "Returns & Exchanges" },
    { text: "Order Tracking" },
    { text: "Corporate Sales & Gifts" },
    { text: "Contact Us" },
  ],
  [
    { text: "MY ACCOUNT" },
    { text: "Sign In or Sign Up" },
    { text: "Order Tracking" },
    { text: "My Auto Refresh" },
    { text: "My Love-It List" },
  ],
  [
    { text: "DISCOVER" },
    { text: "About Us" },
    { text: "Careers" },
    { text: "Gift Cards" },
    { text: "Shop by Fragrance" },
    { text: "Product Ingredients" },
    { text: "Get Inspired" },
    { text: "Diversity, Equity & Inclusion" },
  ],
  [
    { text: "FIND US" },
    { text: "Store Locator" },
    { text: "Global Locations" },
  ],
];

const Footer = () => {
  return (
    <Box p="5vh 10%">
      <Center w="100%" mb="8%">
        <VStack>
          <Heading>Bath & Body Works</Heading>
          <Text textAlign="center" w="75%" color="#666">
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            discontinued scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of lotions,
            soaps and candles!
          </Text>
        </VStack>
      </Center>
      <HStack gap="20px" display="flex" justifyContent="space-around">
        {/* Contact Form Section */}
        <VStack display="grid" w={{ md: "30%", base: "100%" }}>
          <Text fontHeight="12px">
            GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!
          </Text>
          <label>Enter Email</label>
          <Input w="80%" required />
          <label>Confirm Email</label>
          <HStack>
            <Input required />
            <Button
              borderRadius="none"
              bg="black"
              _hover={{ bg: "#393535" }}
              color="white"
            >
              Submit
            </Button>
          </HStack>
          <span>Get connected</span>
          <HStack>
            {socialMedia.map((el) => (
              <Box h="50px" borderRadius="50%" bg={el.color}></Box>
            ))}
          </HStack>
        </VStack>
        {/* Additional Links */}
        {footerLinks.map((el) => {
          return (
            <VStack
              display={{ md: "grid", base: "none" }}
              fontSize="14px"
              justifyContent="flex-start"
              alignSelf="flex-start"
            >
              {el.map((item, i) => (
                <Link
                  color={i == 0 ? "black" : "#666"}
                  fontWeight={i == 0 ? "bold" : ""}
                >
                  {item.text}
                </Link>
              ))}
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Footer;
