import { Center, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

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

const GoodThings = () => {
  return (
    <Center w="100%">
      <Grid
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
                    <Text>{el.title}</Text>
                </VStack>
            </GridItem>
          );
        })}
      </Grid>
    </Center>
  );
};

export default GoodThings;
