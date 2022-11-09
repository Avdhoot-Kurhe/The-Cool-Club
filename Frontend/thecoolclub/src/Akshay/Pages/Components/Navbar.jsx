import { Box, Text, HStack,Spacer,Input } from "@chakra-ui/react";


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
            <a href="">Set Store</a>
          </HStack>
        </HStack>
        <HStack>
            <HStack>
                <Icon/>
                <Input 
                    placeholder = "Search by fregrance" 
                     >
                </Input>
            </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Navbar;
