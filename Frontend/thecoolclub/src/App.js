import AllRoutes from './Routes/AllRoutes';
import BodycarePage from './Pages/BodycarePage';

import ShippingPage from './components/pankajsingh/Shipping/ShippingPage';
import Login from './components/pankajsingh/Login/Login';
import BillingPage from './components/pankajsingh/Shipping/BillingPage';
import SignUp from './components/pankajsingh/SignUp/SignUp';


function App() {
  return (
    <div className="App">
       
      <AllRoutes/>
      {/* <Bodycarepage /> */}
     {/* <ShippingPage /> */}
     {/* <BillingPage /> */}
     <Login />
     {/* <SignUp /> */}
    </div>
  );
}

export default App;
