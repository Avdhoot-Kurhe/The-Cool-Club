import {
  Box,
  Text,
  HStack,
  Spacer,
  Input,
  Image,
  Center,
  ButtonGroup,
  Button,
  Link,
} from "@chakra-ui/react";
import { BsBasket3 } from "react-icons/bs";

const buttonDetails = [
  {
    name: "TOP OFFERS",
    link: "/offers",
  },
  {
    name: "BODY CARE",
    link: "/bodycare",
  },
  {
    name: "CANDLES",
    link: "/candles",
  },
  {
    name: "WALLFLOWERS $ AIR FRESHNERS",
    link: "/waaf",
  },
  {
    name: "HAND SOAPS & SANITIZERS",
    link: "/hss",
  },
  {
    name: "MEN's SHOP",
    link: "/mens",
  },
  {
    name: "MOXY",
    link: "/moxy",
  },
  {
    name: "HOLIDAY SHOP",
    link: "/holiday",
  },
];

const Navbar = () => {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        {/* Navbar Perk Point Section (medium to large screen) */}
        <HStack p={"10px 5%"} bg={"#f2f2f2"}>
          <HStack>
            <Text color={"#e20887"} fontWeight={"bold"}>
              POINTS. PERKS. EXCLUSIVES.
            </Text>
            <a href="">Join Rewards!</a>
          </HStack>
          <Spacer />
          <HStack>
            <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/bopis-icon-small.svg?yocs=o_s_) no-repeat" />
            <Text color={"#005699"} fontWeight={"bold"}>
              PICK UP IN STORE
            </Text>
            <a href="/">Set Store</a>
          </HStack>
        </HStack>
        <HStack p="20px">
          <HStack w="100%">
            <Spacer />
            <Center position="absolute" height="30px" w="100%">
              <Image
                w="40%"
                style={{ height: "100%" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw9893fabc/images/svg-icons/Logos-main.svg?yocs=o_s_"
              />
            </Center>
            <HStack h="40px" w="25%" pr="50px">
              <Input
                borderRadius="none"
                placeholder="Search by fragrance or product.."
              />
              <Image
                h="40px"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
              />
              <Image
                h="30px"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/UI-AddToBag-v2.svg?yocs=o_s_"
              />
            </HStack>
          </HStack>
        </HStack>
        <HStack w="100%">
          <ButtonGroup w="100%" justifyContent="space-around">
            {buttonDetails.map((el) => (
              <Button
                _hover={{ borderBottom: "3px solid #1876a7" }}
                border="none"
                borderRadius="none"
                variant="outline"
                href={el.link}
              >
                {el.name}
              </Button>
            ))}
          </ButtonGroup>
        </HStack>
        <Link w="100%">
          <Center
            fontWeight="semibold"
            w="100%"
            color="#1876a7"
            p="10px 0"
            bg="#e6f5ff"
          >
            My Bath & Body Works Rewards is now available nationwide! Join the
            VIPs
          </Center>
        </Link>
      </Box>
      <Center>
        <Text p="10px 0" w="80%" bg="red" color="white">
          <Center fontWeight="bold">LIMITED TIME ONLY!</Center>
        </Text>
      </Center>
    </>
  );
};

export default Navbar;
