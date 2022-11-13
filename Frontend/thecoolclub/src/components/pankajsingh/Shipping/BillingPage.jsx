import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Text,
  Select,
  Checkbox,
  Radio,
  Link,
  Image
} from "@chakra-ui/react";

import "./shippingPage.css";
import { useNavigate } from "react-router-dom";

const BillingPage = () => {
  const [email, setEmail] = useState(null);
  const handleInputChange = (e) => setEmail(e.target.value);
  const isError = email === "";

  const [password, setPassword] = useState(false);
  const handlePassowrdChange = (e) => setPassword(e.target.value);
  const isPasswordError = password === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setPassword(!show);

  const [firstName , setFirstName] = useState(null);
  const isErrorFirstName = firstName === "";

  const [lastName , setLastName] = useState(null);
  const isErrorLastName = lastName === "";

  const [address, setAddress] = useState(null);
  const isErrorAddress = address === "";

  const [city, setCity] = useState(null);
  const isErrorCity = city === "";

  const [zipCode, setZipCode] = useState(null);
  const isErrorZIP = zipCode === "";

  const [phone, setPhone] = useState(null);
  const isErrorPhone = phone === "";

  const userDetails = [
    {
      user_name:"Pankaj Singh",
      user_address : "Bhojgan laubaj garur bageshwar uttrakhand Bhojgan, KY 39201",
      user_state : "Uttrakhand",
      user_number : "8851505898"
    }
  ]

  const payment_img = [
    {
      img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dwf634b9ab/images/payments/payment-cc.png?yocs=o_s_",

      img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dwf634b9ab/images/payments/payment-cc.png?yocs=o_s_"
    ,
    
      img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dwf634b9ab/images/payments/payment-cc.png?yocs=o_s_"
    ,
    
      img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dwf634b9ab/images/payments/payment-cc.png?yocs=o_s_"
    ,
    
      img : "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dwf634b9ab/images/payments/payment-cc.png?yocs=o_s_"
    }
  ]

  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    setTimeout(() => {
      navigate("/")
    }, 1000);
  }
  return (
    <div>
      <div className="main_shipping_page">
        <div className="shipping_page_slider"></div>
        <div className="shipping_page">
          <div className="shipping_page_right_main">
            <div className="shipping_page_right_main_accordion">
            <h3>BILLING ADDRESS</h3>
                <Box>
                {
                  userDetails.map((item) => (
                    <div>
                      <p>{item.user_name}</p>
                    <p>{item.user_address}</p>
                    <p>{item.user_state}</p>
                    <p>{item.user_number}</p>
                    </div>
                  ))
                }
                </Box> 
            </div>
            <div className="shipping_page_right_main_shippingAddress">
              <Heading textAlign='left'ml="1rem" mt="2.3rem"> CONTACT INFORMATION </Heading>
              <FormControl isInvalid={isErrorFirstName} isRequired>
              <Box display='flex' mt="1rem">
              <FormLabel marginLeft="0.5rem">Email</FormLabel>
              <FormLabel ml="60%">Required</FormLabel>
              </Box>
                <Input
                  paddingLeft="0.5rem"
                  marginTop="0.1rem"
                  type="email"
                  value={email}
                //   onChange={handleChange}
                  width="90%"
                  height="30px"
                />
                {!isErrorFirstName ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter your email
                  </FormErrorMessage>
                )}
              </FormControl>   
            </div>
            <div className="shipping_page_right_main_shippingMethod">
            <Accordion defaultIndex={[0]} allowMultiple >
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor="white"
                      border="1px dashed black"
                      cursor="pointer"
                    >
                      <Box flex="1" textAlign="left" mt="0.5rem">
                        <h2> PROMOTION CODE </h2>
                      </Box>
                      <AccordionIcon marginLeft="3rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl  isRequired>
                      <FormLabel marginLeft="0.8rem">Promotion Code</FormLabel>
                      <InputGroup marginTop="1rem" marginLeft="0.8rem">
                        <Input
                          paddingLeft="0.5rem"
                          // pr='4.5rem'
                        //   value={promo}
                        //   onChange={handlePassowrdChange}
                          width="70%"
                          height="30px"
                        />
                        <Button w="18%" h="35px" onClick={handleClick}>
                          APPLY
                        </Button>
                      </InputGroup>

                      <Text fontSize='13px' textAlign='justify'>Only one promotion code can be applied per order. You can submit a different code by entering it in the field above and clicking apply.</Text>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </div>
            <div className="shipping_page_right_main_shippingMethod">
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor="white"
                      border="1px dashed black"
                      cursor="pointer"
                    >
                      <Box flex="1" textAlign="left">
                        <h2> GIFT CARDS </h2>
                      </Box>
                      <AccordionIcon marginLeft="3rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl  isRequired>
                      <FormLabel marginLeft="0.6rem">Gift Card Number</FormLabel>
                        <Input
                          // pr='4.5rem'
                        //   value={promo}
                        //   onChange={handlePassowrdChange}
                          width="80%"
                          height="30px"
                        />
                      <FormControl mt="0.7rem"> PIN</FormControl>
                      <Input  width="50%"/>
                      
                      <Box display='flex' mt="0.9rem">
                        <Button> APPLY </Button>
                        <Text mt="0.5rem" ml="0.5rem"> Or</Text>
                        <Text mt="0.5rem" ml="0.5rem"> Check Gift Card Balance</Text>
                      </Box>

                      <Text mt="0.6rem">Up to 2 Gift Cards can be applied per order.</Text>
                    </FormControl>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

            </div>

            <div className="payment_method">
                  <Box mt="1.5rem">PAYMENT METHOD</Box>
                  <Box display="flex" mt="0.5rem">
                    <input type="radio"  />
                  {
                    payment_img.map((item) => (
                      <Image src={item.img} alt="img" ml="0.3rem"/>
                    ))
                  }
                  <Box display='flex' ml="1.5rem">
                    <input type="radio"/>
                    <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites/default/dw39bcf393/images/payments/payment-ppal.svg?yocs=o_s_" />
                    </Box>

                  </Box>
                  <div>
                    <FormControl isRequired> 
                    <FormLabel mt="0.5rem">Required</FormLabel>
                    </FormControl>
                  </div>

                <div>
                   <FormControl isRequired>
                      <FormLabel mt="1rem"> Name on Card</FormLabel>
                      <Input />

                      <FormLabel mt="1rem">Number</FormLabel>
                      <Input />

                      <FormLabel mt="1rem">Expiration Date</FormLabel>
                      <Box display='flex' pt="0.5rem">
                      <Select>
                        <option value="">Month</option>
                        <option value="">Jan</option>
                        <option value="">Fed</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                      </Select>

                      <Select>
                        <option value="">Year</option>
                        <option value="">Jan</option>
                        <option value="">Fed</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                      </Select>
                      </Box>

                      <Box>
                         <FormLabel mt="1rem">Security Code</FormLabel>
                         <Input />
                      </Box>
                   </FormControl>

                   <Box mb="4rem" display="flex" mt="1.2rem" ml="2%">
                     <Button onClick={handlePlaceOrder}> Place Order</Button>
                     <Text ml="1.2rem" mt="0.5rem"> Privacy Policy</Text>
                   </Box>
                </div>
            </div>
          </div>



          <div className="shipping_page_left_main">
            <Box>
               <Heading fontWeight='400'>YOUR ORDER</Heading>
            </Box>
            <Box display='flex' className="border_product">
               <Box mt="1rem">
                 <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb15abfdd/hires/026573586.jpg?sw=177&yocs=o_s_" alt="" 
                 className="productImage"/>
               </Box>
               <Box mt="0.5rem" ml="0.5rem">
                  <p>TWISTED PEPPERMINT</p>
                  <p >Gentle Foaming Hand Soap</p>
                  <p >Size: 8.75 fl oz / 259 mL</p>
                  <p >Qty : 1</p>
               </Box>
            </Box>
            <Box borderBottom="5px solid rgb(229,229,229)" textAlign='right' >
                <Text mr="2.5rem">$7.50</Text>
            </Box>

            <Box display='flex'>
               <Box width='60%' textAlign='left'ml="1.5rem"> 
                  <Text mt="1.5rem"> MERCHANDISE SUBTOTAL</Text>
                  <Text mt="1.5rem"> ESTIMATED SHIPPING & <br/> HANDLING - Standart</Text>
                  <Text mt="1.5rem"> SALES TAX</Text>
               </Box>
               <Box ml='5rem'>
                  <Text mt="1.5rem"> $7.50</Text>
                  <Text mt="1.5rem"> $10.99</Text>
                  <Text mt="2.5rem" > $1.85</Text>
               </Box>
            </Box>
            <Box width='60%' textAlign='justify' ml="1.5rem" mb="1rem"> Tax is estimated and will be calculated when your order is processed</Box>

            <Box display='flex' justifyContent='space-between' borderTop="5px solid rgb(229,229,229)" pt="1rem" fontWeight='bold'>
               <Box ml="2rem"> ORDER TOTAL (USD)</Box>
               <Box mr="3rem"> $20.34</Box>
            </Box>

            <Box mt="7rem" border="2px solid black">
               <Text> SHIPPING ADDRESS</Text>
               <Box>
                 {/* <Text>{"USER_NAME"}</Text>
                 <Text>{"uSER_Address"}</Text>
                 <Text>{"USER_COUNTRY"}</Text>
                 <Text>{"USER_PHONE_nUMBER"}</Text> */}

                  <Text>Shipping - Standard $6.99</Text>
               </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
