import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import LabTests from "./LabTests";
import ConsultUs from "./ConsultUs";
import FindaDoctor from "./FindaDoctor";
import Cart from "./Cart";
import Account from "./Account";
import ErrorPage from "./ErrorPage";
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './Test';
import Doctor from './Doctor';
import Submit from './components/Submit';
import PaymentPage from './components/PaymentPage';


const App = () => {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/consult-us" element={<ConsultUs />} />
        <Route path="/find-a-doctor" element={<FindaDoctor />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/submit" element={<Submit/>}/>
        <Route path="/payment-page" element={<PaymentPage/>}/>
      </Routes>
      
      
      <Footer/>

    </Router>
  )
}

export default App
