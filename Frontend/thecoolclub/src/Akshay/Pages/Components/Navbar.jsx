import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
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
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../../Assets/the_cool_club_logo.png";
import { BsBasket3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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

const accordians = [
  {
    "BODY CARE": {
      "BATH & SHOWER": [
        "All Bath & Shower",
        "Body Scrub",
        "Body Wash & Shower Gel",
      ],
      MOISTURIZERS: ["All Moisturizers", "Body Lotion", "Body Cream"],
      FRAGRANCE: ["All Fragrance", "Body Spraus & Mists", "Perfume & Cologne"],
      "NEW & NOW": ["All Aromatherapy"],
    },
  },
  {
    CANDLES: {
      "ALL CANDLES": [
        "3-Wick Candles",
        "Single Wick Candles",
        "Candle Holders & Accessories",
        "The White Barn Shop",
      ],
      "CANDLES OFFERS": "Buy 1 Fet 1 FREE All Candles",
    },
    "WALLFLOWERS & AIR FRESHNERS": {
      WALLFLOWERS: [
        "All Wallflowers",
        "Wallflowers Plugs",
        "Auto Refresh Wallflowers",
      ],
      "AIR FRESHNERS": ["Room Sprays & Mists", "Car Fragrance"],
    },
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
            <Center position="absolute" height="30px" zIndex="111" w="90%">
              <Image
                h="60px"
                cursor="pointer"
                onClick={() => {
                  navigate("/home");
                }}
                src={Logo}
              />
            </Center>
            <HStack h="40px" w="40%" zIndex="1000" gap="20px" pr="50px">
              <InputGroup>
                <Input
                  // right={}
                  borderRadius="none"
                  placeholder="Search by fragrance or product"
                />
                <InputRightElement
                  children={<Search2Icon color="blue.500" />}
                />
              </InputGroup>
              <Image
                h="40px"
                cursor="pointer"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
              />
              <Image
                h="30px"
                cursor="pointer"
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/UI-AddToBag-v2.svg?yocs=o_s_"
              />
            </HStack>
          </HStack>
        </HStack>
        <HStack w="100%">
          <ButtonGroup w="100%" p="0 1%" justifyContent="space-around">
            {buttonDetails.map((el) => (
              <Button
                fontSize="14px"
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
      <Box display={{ base: "block", md: "none" }}>
        <HStack w="100%" p="2%" justifyContent="space-around">
          <Link onClick={onOpen}>
            <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw1efa6c4a/images/svg-icons/UI-Menu-v2.svg?yocs=o_s_"></Image>
          </Link>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwfc4c9aaa/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"></Image>
          <Image h="50px" src={Logo} />
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6c6ff748/images/svg-icons/UI-Tag-v2.svg?yocs=o_s_"></Image>
          <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/UI-AddToBag-v2.svg?yocs=o_s_" />
        </HStack>
      </Box>
      <>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color="#005699" fontSize="16px">
              MENU
            </DrawerHeader>

            <VStack gap="30px">
              <HStack w="90%">
                <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwfc4c9aaa/images/svg-icons/UI-Search-v2.svg?yocs=o_s_"></Image>
                <Input placeholder="Search" variant="flushed" />
              </HStack>
              <VStack alignItems="flex-start">
                <HStack>
                  <Image
                    h="30px"
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/bopis-icon-small.svg?yocs=o_s_) no-repeat"
                  />
                  <VStack gap="-8px" fontSize="13px" alignItems="flex-start">
                    <Text
                      textAlign="start"
                      color={"#005699"}
                      fontWeight={"semibold"}
                      letterSpacing="2px"
                    >
                      PICK UP IN STORE
                    </Text>
                    <Link href="/">Easy, fast, free pickup!</Link>
                  </VStack>
                </HStack>
                <Link fontSize="13px" textDecoration="underline" href="/">
                  Set Store
                </Link>
              </VStack>
              <Divider />
              <HStack>
                <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6c6ff748/images/svg-icons/UI-Tag-v2.svg?yocs=o_s_"></Image>
                <Text>TOP OFFERS</Text>
              </HStack>
              <Divider />
              <Accordion w="100%">
                <AccordionItem>
                  <AccordionButton w="100%">
                    <Box flex="1" textAlign="left">
                      BODY CARE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </VStack>
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
};

export default Navbar;
