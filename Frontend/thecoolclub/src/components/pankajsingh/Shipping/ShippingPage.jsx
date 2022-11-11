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
  Radio
} from "@chakra-ui/react";

import "./shippingPage.css";

const ShippingPage = () => {
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
  return (
    <div>
      <div className="main_shipping_page">
        <div className="shipping_page_slider"></div>
        <div className="shipping_page">
          <div className="shipping_page_right_main">
            <div className="shipping_page_right_main_accordion">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton
                      backgroundColor="white"
                      border="1px dashed black"
                      cursor="pointer"
                    >
                      <Box flex="1" textAlign="left">
                        <h2> SIGN IN FOR FASTER CHECKOUT </h2>
                      </Box>
                      <AccordionIcon marginLeft="3rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <FormControl isInvalid={isError} isRequired>
                      <FormLabel marginLeft="0.8rem">Email Address</FormLabel>
                      <Input
                        paddingLeft="0.5rem"
                        marginTop="1rem"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        width="90%"
                        height="30px"
                      />
                      {!isError ? (
                        <FormHelperText marginLeft="0.8rem">
                          {""}
                        </FormHelperText>
                      ) : (
                        <FormErrorMessage marginLeft="0.8rem" color="red">
                          please enter your email address
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <FormControl isInvalid={isPasswordError} isRequired>
                      <FormLabel marginLeft="0.8rem" marginTop="1.5rem">
                        Password
                      </FormLabel>
                      <InputGroup marginTop="1rem" marginLeft="0.8rem">
                        <Input
                          paddingLeft="0.5rem"
                          // pr='4.5rem'
                          value={password}
                          onChange={handlePassowrdChange}
                          width="70%"
                          height="30px"
                          type={password ? "text" : "password"}
                        />
                        <Button w="18%" h="35px" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputGroup>
                      {!isError ? (
                        <FormHelperText marginLeft="0.8rem">
                          {""}
                        </FormHelperText>
                      ) : (
                        <FormErrorMessage marginLeft="0.8rem" color="red">
                          please enter your password
                        </FormErrorMessage>
                      )}
                    </FormControl>

                    <Box textAlign="left" marginLeft="0.7rem" marginTop="2rem">
                      <Box cursor="pointer">
                        {" "}
                        <p>Forget Password ?</p>
                      </Box>
                      <Box>
                        <Button
                          cursor="pointer"
                          backgroundColor="black"
                          color="white"
                          w="140px"
                          h="40px"
                        >
                          SIGN IN
                        </Button>
                        <Button
                          cursor="pointer"
                          ml="1rem"
                          backgroundColor="white"
                          border="none"
                          borderBottom="1px solid black"
                          fontSize="0.9rem"
                        >
                          Privacy Policy
                        </Button>
                      </Box>
                      <Box mt="2.2rem" mb="2rem">
                        <Text>DONT'T HAVE AN ACCOUNT?</Text>
                        <Text>You can easily create on after checkout</Text>
                      </Box>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="shipping_page_right_main_shippingAddress">
              <Heading textAlign='left'ml="1rem" mt="2.3rem"> SHIPPING ADDRESS </Heading>
              <FormControl isInvalid={isErrorFirstName} isRequired>
                <FormLabel marginLeft="0.8rem">First Name</FormLabel>
                <Input
                  paddingLeft="0.5rem"
                  marginTop="1rem"
                  type="first Name"
                  value={firstName}
                  // onChange={handleChange}
                  width="90%"
                  height="30px"
                />
                {!isErrorFirstName ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter your first name
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isErrorLastName} isRequired>
                <FormLabel  className="shippingInputDiv">Last Name</FormLabel>
                <Input
                  className="shippingInput"
                  type="Last Name"
                  value={lastName}
                  // onChange={handleChange}
                />
                {!isErrorLastName ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter your last name
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isErrorAddress} isRequired>
                <FormLabel className="shippingInputDiv">Address 1</FormLabel>
                <Input
                  className="shippingInput"
                  value={address}
                  // onChange={handleChange}
                />
                {!isErrorAddress ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter a street address or P.O. box.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel  className="shippingInputDiv">Address 2</FormLabel>
                <Input
                   className="shippingInput"
                  // onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel  className="shippingInputDiv">Country</FormLabel>
                <Select placeholder="Select country"  >
                  <option>India</option>
                  <option>United States</option>
                  <option>Nepal</option>
                  <option>SriLanka</option>
                  <option>Pakisthan</option>
                  <option>Bangaldesh</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={isErrorCity} isRequired>
                <FormLabel className="shippingInputDiv">City</FormLabel>
                <Input
                 className="shippingInput"
                  type="city"
                  value={city}
                  // onChange={handleChange}
                />
                {!isErrorCity ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter a city.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired>
                <FormLabel  className="shippingInputDiv">State</FormLabel>
                <Select placeholder="Select.....">
                  <option>Uttrakhand</option>
                  <option>Delhi</option>
                  <option>Himachal Pardesh</option>
                  <option>Kerla</option>
                  <option>Maharashtra</option>
                  <option>M.P</option>
                  <option>Gujrat</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={isErrorZIP} isRequired>
                <FormLabel  className="shippingInputDiv">ZIP Code</FormLabel>
                <Input
                 className="shippingInput"
                  type="zip code"
                  value={zipCode}
                  // onChange={handleChange}
                />
                {!isErrorZIP ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter a zip/postal code.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={isErrorPhone} isRequired>
                <FormLabel  className="shippingInputDiv">Phone</FormLabel>
                <Input
                   className="shippingInput"
                  type="phone"
                  value={phone}
                  // onChange={handleChange}
                  mb="2rem"
                />
                {!isErrorPhone ? (
                  <FormHelperText marginLeft="0.8rem">{""}</FormHelperText>
                ) : (
                  <FormErrorMessage marginLeft="0.8rem" color="red">
                    please enter a phone number.
                  </FormErrorMessage>
                )}
              </FormControl>

              <div>
              <Checkbox defaultChecked  border='1px solid white'>Checkbox</Checkbox>
              </div>
              <div>
                <p>Are you shipping a gift?</p>
                <input type="radio" /> Yes
                <input type="radio" /> No
              </div>
            </div>
            <div className="shipping_page_right_main_shippingMethod">
               <Box>SHIPPING METHOD</Box>
                <Box display='flex'>
                   <Box>
                   <p><input type="radio" />Standrad (3-7 business days) <br/>
                   Estimated delivery Tues Nov 15 - Mon Nov 21 Details</p>
                   </Box>
                   <Box>$6.99</Box>
                </Box>

                <Box display='flex'>
                   <Box>
                   <p><input type="radio" />Expedited (2 business days) <br/>
                   Estimated delivery Mon Nov 21 Details</p>
                   </Box>
                   <Box>$6.99</Box>
                </Box>

                <Box display='flex'>
                   <Box>
                   <p><input type="radio" />Overnight (1 business days) <br/>
                   Estimated delivery Thurs Nov 10 Details</p>
                   </Box>
                   <Box>$6.99</Box>
                </Box>

                <Text> Please complete all form fields before continuing</Text>

                <Box>
                  <Button>GO TO BILLING </Button>
                  <Button> Privacy Policy</Button>
                </Box>

            </div>
          
          </div>
          <div className="shipping_page_left_main">
            <Box>
               <Heading fontWeight='400'> YOUR ORDER</Heading>
            </Box>
            <Box display='flex' className="border_product">
               <Box mt="1rem">
                 <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb15abfdd/hires/026573586.jpg?sw=177&yocs=o_s_" alt="" 
                 className="productImage"/>
               </Box>
               <Box className="img_Div" ml="1rem">
                  <p className="lineHeight lineHeigh_heading">TWISTED PEPPERMINT</p>
                  <p className="lineHeight">Gentle Foaming Hand Soap</p>
                  <p className="lineHeight">Size: 8.75 fl oz / 259 mL</p>
                  <p className="lineHeight">Qty : 1</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
