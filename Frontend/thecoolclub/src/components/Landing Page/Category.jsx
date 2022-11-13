import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const categories = [
  {
    title: "Shop Body Care",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw90169280/images/Christmas2022/bc_dream-bright_c1_vn.jpg?yocs=o_s_",
  },
  {
    title: "Shop Candles",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9c3dac1d/images/Christmas2022/cndl_holtrads-wb_c1_vn.jpg?yocs=o_s_",
  },
  {
    title: "Shop Wallflowers",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4201241f/images/Christmas2022/diff_decor_c1_vn.jpg?yocs=o_s_",
  },
  {
    title: "Shop Hand Soaps",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8ac572be/images/Christmas2022/sp_holtrads-gifting_c1_vn.jpg?yocs=o_s_",
  },
  {
    title: "Shop Aromatherapy",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe05b7acb/images/Christmas2022/xcat_wellness-pov_c1_vn.jpg?yocs=o_s_",
  },
  {
    title: "Shop Men's",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf3b1b26/images/Christmas2022/bc_mens-sfl-blktie_c1_vn.jpg?yocs=o_s_",
  },
];

const midCollection = [
  // {
  //   title: "",
  //   image:
  //     "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5e99db2a/images/Christmas2022/xcat_dream-bright_c1_atb.jpg?yocs=o_s_",
  // },
  // {
  //   title: "",
  //   image: "",
  // },
  {
    title: "Hectic holiday? Not this year.",
    link: "Shop Aromatherapy",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw872bda80/images/Christmas2022/xcat_wellness-pov_c1_hps.jpg?yocs=o_s_",
  },
  {
    title:
      "Let wintery shades, shimmering details and flurrying fragrance be your reason for the gifting season!",
    link: "Shop the Collection",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa7f4e5a2/images/Christmas2022/xcat_snow-beautiful_c1_hps.jpg?yocs=o_s_",
  },
  {
    title: "For the really, really nice list: Bring joy home.",
    link: "Shop Holiday",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55db398a/images/Christmas2022/xcat_nutcracker-nightb4_c1_hps.jpg?yocs=o_s_",
  },
  {
    title: "Go for gifting gold with a sophisticated routine upgrade.",
    link: "Shop Men's",
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4a0649b6/images/Christmas2022/bc_mens-sfl-blktie_c1_hps.jpg?yocs=o_s_",
  },
];

const Category = () => {
  return (
    <>
      <Center w="100%" fontWeight="bold" fontSize="24px">
        SHOP BY CATEGORY
      </Center>
      <Grid
        p="1% 7%"
        templateColumns={{
          md: "repeat(3,1fr)",
          base: "repeat(2,1fr)",
          lg: "repeat(6,1fr)",
        }}
      >
        {categories.map((el) => {
          return (
            <GridItem>
              <VStack>
                <Link>
                  <Image h="168px" src={el.image} />
                </Link>
                <Link textDecoration="underline">{el.title}</Link>
              </VStack>
            </GridItem>
          );
        })}
      </Grid>
      <Center mt="2%" w="100%" fontWeight="bold" fontSize="24px">
        NEW Dream Bright
      </Center>
      <Center>
        <Text w={{ md: "37%", base: "75%" }} color="#666" textAlign="center">
          Let fragrance dreams become reality with a unique blend of sapphire
          berries, night-blooming orchid and crystalized vanilla.
        </Text>
      </Center>
      <Center mt="30px" w="100%">
        <Button
          bg="#e5e5e5"
          color="black"
          borderRadius="none"
          fontWeight="bold"
          p="25px 30px"
          _hover={{
            color: "white",
            bg: "black",
          }}
        >
          SHOP THE COLLECTION
        </Button>
      </Center>
      <Grid
        p="2% 10%"
        gap="30px"
        templateColumns={{
          md: "repeat(2,1fr)",
          base: "repeat(1,1fr)",
        }}
      >
        {midCollection.map((el) => (
          <GridItem>
            <VStack>
              <Image src={el.image} />
              <Text color="#666" textAlign="center">
                {el.title}
              </Text>
              <Link
                fontWeight="semibold"
                textDecoration="underline"
                textAlign="center"
              >
                {el.link}
              </Link>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Category;
