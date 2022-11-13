import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from './components/Landing Page/Footer';
import Navbar from './components/Landing Page/Navbar';
import AdminPage from './Pages/AdminPage';
import CartPage from './Pages/CartPage';
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
