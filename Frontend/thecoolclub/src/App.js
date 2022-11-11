import AllRoutes from './Routes/AllRoutes';
import './App.css';
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
