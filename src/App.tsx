import React from 'react';
import "./App.css";
import { HomePage } from './pages/HomePage';
import { ThemeContext } from './ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomerDetails } from "./pages/CustomerDetails";
import { Customers } from "./pages/Customers";
import { BillBreakdown } from "./pages/BillBreakdown";
import { Devices } from "./pages/Devices";
import { DeviceDetails } from "./pages/DeviceDetails";
import { CustomerPlans } from "./pages/CustomerPlan";


function App() {
  return (
    <ThemeContext.Provider value="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Customers" element={<Customers />}/>
          <Route path="/Customers/:customerId" element={<CustomerDetails />} />
          <Route path="/Customer/:Bill" element={<BillBreakdown/>}/>
          <Route path="/Device" element={<Devices />}/>
          <Route path="/Device/:deviceId" element={<DeviceDetails/>}/>
          <Route path="/CustomerPlan" element={<CustomerPlans/>}/>
     
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
