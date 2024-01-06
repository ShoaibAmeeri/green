import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer";
import AboutUs from "./pages/about/AboutUs";
import { Router, Route, createBrowserRouter, BrowserRouter, Routes } from "react-router-dom";
import Books from "./pages/Books/Books";
import Review from "./pages/Review/Review";
import OrderCopy from "./pages/Order/OrderCopy";
import LogIn from "./pages/SignIn/Login";
import Signup from "./pages/SignIn/Signup";


function App() {
  


  
  return (
    <div className="bg-green-50">
    <BrowserRouter>
      <Nav/>
      <Routes>
        
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <AboutUs/> }/>
        <Route path="/books" element={ <Books/> }/>
        <Route path="/review" element={ <Review/> }/>
        <Route path="/order" element={ <OrderCopy/> }/>
        <Route path="/login" element={ <LogIn/> }/>
        <Route path="/signup" element={ <Signup/> }/>


      </Routes>
      <Footer/> 
    </BrowserRouter>
  
    </div> 
  );
}

export default App;
