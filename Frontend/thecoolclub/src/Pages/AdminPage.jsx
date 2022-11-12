import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Admins from "../components/Adminpage/Admins";
import Dashboard from "../components/Adminpage/Dashboard";
import Orders from "../components/Adminpage/Orders";
import Products from "../components/Adminpage/Products";
import Profile from "../components/Adminpage/Profile";
import Users from "../components/Adminpage/Users";

const AdminPage = () => {
  return (
    <Container maxW="full"p='0px' m='0px'>
      <Tabs
        variant="soft-rounded"
        colorScheme="red"
        orientation="vertical"
        
       
      >
        <TabList w='20%' minH='100vh' bg='gray.100'px='10px' py='50px' gap='10px'>
          <Tab>Dashboard</Tab>
          <Tab>Products</Tab>
          <Tab>Orders</Tab>
          <Tab>Admins</Tab>
          <Tab>Users</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanels>
          <Dashboard/>
          <Products/>
          <Orders/>
          <Admins/>
          <Users/>
          <Profile/>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default AdminPage;
