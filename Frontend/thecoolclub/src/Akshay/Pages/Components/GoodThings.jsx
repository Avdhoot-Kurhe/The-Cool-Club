import {
  Button,
  ButtonGroup,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Category from "./Category";
import TopOffers from "./TopOffers";

const tabsData = [
  {
    title: "Join the VIPs",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_",
  },
  {
    title: "Shop your way",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwae0faf07/images/Christmas2022/xcat_bopisgeneric_c1_vn.png?yocs=o_s_",
  },
  {
    title: "Sign up for texts",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_",
  },
  {
    title: "Sign up for emails",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_",
  },
  {
    title: "Check out Auto Refresh",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_",
  },
  {
    title: "See Return Policy for details and conditions",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_",
  },
];

const buttonNames = [
  {
    title: "STOCKING STUFFERS",
  },
  {
    title: "GIFT SETS",
  },
  {
    title: "GIFTS UNDER $15",
  },
  {
    title: "GIFTS UNDER $40",
  },
  {
    title: "GIFTS FOR HER",
  },
  {
    title: "GIFTS FOR HIM",
  },
  {
    title: "STOCKING STUFFERS",
  },
];

const GoodThings = () => {
  return (
    <>
      <Center>
        <Text
          display={{ base: "none", md: "block" }}
          mt="20px"
          p="10px"
          w="80%"
          bg="black"
          color="white"
        >
          <Center fontWeight="bold">2 DAYS ONLY! IN STORES & ONLINE!</Center>
        </Text>
      </Center>
      <Center m="1% 0">
        <Image
          p="10px 0"
          w="80%"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7927178e/images/Christmas2022/b1g1candles_c1_16x9.gif?yocs=s_"
        />
      </Center>
      {/* <TopOffers /> */}
      <Center>
        <Text
          display={{ base: "none", md: "block" }}
          mt="20px"
          p="10px"
          w="80%"
          bg="red"
          color="white"
        >
          <Center fontWeight="bold">LIMITED TIME ONLY!</Center>
        </Text>
      </Center>
      <Center>
        <Image
          w="80%"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw03022172/images/Christmas2022/bc_sb-faceted_c1_hm.gif?yocs=s_"
        />
      </Center>
      <Category />

      <Center w="100%">
        <Image
          p="2% 12%"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9a12e321/images/Christmas2022/xcat_moxy-launch_fa3_hb.jpg?yocs=s_"
        />
      </Center>
      <Center w="100%">
        <ButtonGroup
          w="90%"
          p="2% 5%"
          gap="20px"
          justifyContent="center"
          flexWrap="wrap"
        >
          {buttonNames.map((el) => (
            <Button
              color="white"
              bg="black"
              borderRadius="none"
              _hover={{ color: "black", bg: "white" }}
            >
              {el.title}
            </Button>
          ))}
        </ButtonGroup>
      </Center>
      <Center w="100%">
        <Image
          p="2% 12%"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw126cc0be/images/Christmas2022/xcat_hp-gifting-zone_c1_hb.jpg?yocs=s_"
        />
      </Center>
      <Heading fontSize="24px" textAlign="center" p="2%">
        MORE GOOD THINGS, THIS WAY
      </Heading>
      <Center w="100%">
        <Grid
          w="80%"
          templateColumns={{
            md: "repeat(3,1fr)",
            base: "repeat(2,1fr)",
            lg: "repeat(6,1fr)",
          }}
          p="2%"
          gap="5"
        >
          {tabsData.map((el) => {
            return (
              <GridItem>
                <VStack>
                  <Image src={el.image} />
                  <Text
                    textAlign="center"
                    fontSize="14px"
                    textDecoration="underline"
                    fontWeight="semibold"
                  >
                    {el.title}
                  </Text>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
      </Center>
    </>
  );
};

export default GoodThings;
