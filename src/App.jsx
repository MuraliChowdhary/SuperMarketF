import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 

import Cashier from './DashBoard/Cashier';
import StoreManager from './DashBoard/StoreManager';
import DataAnalyst from './DashBoard/DataAnalayst';
import Customer from './DashBoard/Customer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './DashBoard/Admin/Admin';
import Suppiler from './DashBoard/Suppiler';

function App() {
 

  return (
    <>
   
       
  <Router>
  <Routes>
    <Route path="/cashier" element={<Cashier/>}/>
    <Route path="/Customer" element={<Customer/>}/>
    <Route path="/Suppiler" element={<Suppiler/>}/>
    <Route path="/StoreManger" element={<StoreManager/>}/>
    <Route path="/Admin" element={<Admin/>}/>
    <Route path="/DataAnalayst" element={<DataAnalyst/>}/>
  </Routes>
    </Router>
    </>
  )
}

export default App
