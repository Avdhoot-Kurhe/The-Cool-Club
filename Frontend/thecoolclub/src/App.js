import AllRoutes from './Routes/AllRoutes';
import Bodycarepage from './Pages/Bodycarepage';

import ShippingPage from './components/pankajsingh/Shipping/ShippingPage';
import BillingPage from './components/pankajsingh/Shipping/BillingPage';
import AdminPage from './Pages/AdminPage';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Bodycarepage /> */}
     {/* <ShippingPage /> */}
     <AdminPage />
    </div>
  );
}

export default App;
