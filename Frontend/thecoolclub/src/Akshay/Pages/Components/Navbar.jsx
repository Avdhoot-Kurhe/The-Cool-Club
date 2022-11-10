import { Box, Text, HStack,Spacer,Input,Image,Center } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <>
      <Box>
        {/* Navbar Perk Point Section (medium to large screen) */}
        <HStack p={"10px 5%"} bg={"#f2f2f2"} w={"100%"} display={{base:"none",md:"flex"}} >
          <HStack>
            <Text color={"#e20887"} fontWeight={"bold"}>
              POINTS. PERKS. EXCLUSIVES.
            </Text>
            <a href="">Join Rewards!</a>
          </HStack>
          <Spacer/>
          <HStack>
            <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/bopis-icon-small.svg?yocs=o_s_) no-repeat"/>
            <Text color={"#005699"} fontWeight={"bold"}>PICK UP IN STORE</Text>
            <a href="/">Set Store</a>
          </HStack>
        </HStack>
        <HStack p="20px" >
            <HStack w="100%">
                <Spacer/>
                <Center position="fixed" height="40px" w="100%" >
                    <img style={{height:"100%"}} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw9893fabc/images/svg-icons/Logos-main.svg?yocs=o_s_" />
                </Center>
                <HStack h="40px" w="25%">
                    <Input borderRadius="none" placeholder="Search by fragrance or product.." />
                        <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"/>
                    <Box>
                    </Box>
                    <Box>
                        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1667990775125/images/svg-icons/bopis-icon-small.svg?yocs=o_s_) no-repeat"/>
                    </Box>
                </HStack>
            </HStack>
        </HStack>
        <></>
      </Box>
    </>
  );
};

export default Navbar;
