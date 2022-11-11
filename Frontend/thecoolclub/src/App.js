import AllRoutes from './Routes/AllRoutes';
import './App.css';
import Bodycarepage from './Pages/Bodycarepage';

import ShippingPage from './components/pankajsingh/Shipping/ShippingPage';
import BillingPage from './components/pankajsingh/Shipping/BillingPage';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Bodycarepage /> */}
     {/* <ShippingPage /> */}
     <BillingPage />
    </div>
  );
}

export default App;
