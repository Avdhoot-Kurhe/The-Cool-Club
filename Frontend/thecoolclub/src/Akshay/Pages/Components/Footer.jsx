import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const socialMedia = [
  {
    link: "https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png",
    color: "#3460a1",
  },
  {
    link: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
    color: "#28aae1",
  },
  {
    link: "https://smallimg.pngkey.com/png/small/448-4486200_instagram-logo-circle.png",
    color: "#35648b",
  },
  {
    link: "https://seeklogo.com/images/T/tiktok-logo-1F4A5DCD45-seeklogo.com.png",
    color: "black",
  },
  {
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/YouTube_social_red_circle_%282017%29.svg/2048px-YouTube_social_red_circle_%282017%29.svg.png",
    color: "red",
  }
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
    { text: "Global Locations" },
  ],
];
const footLinks = [
  "Terms Of Use",
  "Privacy Policy",
  "Security Bug Report",
  "California",
  "Shop by Fragrance",
  "Product Ingredients",
  "Get Inspired",
  "Diversity, Equity & Inclusion",
  "States Privacy Rights Notice (Certain States)",
  "Do Not Sell or Share My Personal Information (Certain States)",
  "Transparency in Supply Chains",
  "Targeted Ad Preferences (Certain States)",
  "Limit the Use of My Sensitive Personal Information (California)",
  "© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.",
];

const Footer = () => {
  const [input, setInput] = useState("");
  const isError = input === "";
  return (
    <>
      <Box p="5vh 10%">
        <Center w="100%" mb="8%">
          <VStack>
            <Heading>Bath & Body Works</Heading>
            <Text
              textAlign="center"
              w={{ md: "75%", base: "95%" }}
              color="#666"
              fontSize="12px"
            >
              Bath and Body Works is your go-to place for gifts & goodies that
              surprise & delight. From fresh fragrances to soothing skin care,
              we make finding your perfect something special a
              happy-memory-making experience. Searching for new seasonal
              creations or your favorite discontinued scents? We’ve got you
              covered there, too. Oh! And while you're browsing, shop our latest
              & greatest selection of lotions, soaps and candles!
            </Text>
          </VStack>
        </Center>
        <HStack gap="20px" display="flex" justifyContent="space-around">
          {/* Contact Form Section */}
          <VStack display="grid" w={{ md: "30%", base: "100%" }}>
            <Text fontSize="12px">
              GET EMAIL OFFERS & THE LATEST NEWS FROM BATH & BODY WORKS!
            </Text>
            <FormControl>
              <FormLabel fontSize="14px">Email</FormLabel>
              <Input
                borderRadius="none"
                type="email"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <FormLabel fontSize="14px">Confirm Email</FormLabel>
              <HStack>
                <Input borderRadius="none" type="email" required />
                <Button
                  borderRadius="none"
                  bg="black"
                  _hover={{ bg: "#393535" }}
                  color="white"
                >
                  Submit
                </Button>
              </HStack>
            </FormControl>
            <Link>Get connected</Link>
            <HStack w="100%">
              {socialMedia.map((el) => {
                return <Image w="30px" src={el.link}></Image>;
              })}
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
                    fontSize={i == 0 ? "14px" : "12px"}
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
      <Box w="100%" bg="#f2f2f2" p="5vh 10%">
        <Flex justifyContent="center" fontSize="10px" gap="20px" wrap="wrap">
          {footLinks.map((el) => {
            return <Link>{el}</Link>;
          })}
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
