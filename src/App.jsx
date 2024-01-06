import { useState } from "react";
import Nav from "./components/nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer";
import AboutUs from "./pages/about/AboutUs";
import { Router, Route, createBrowserRouter, BrowserRouter, Routes } from "react-router-dom";
import Books from "./pages/Books/Books";
import Review from "./pages/Review/Review";
import OrderCopy from "./pages/Order/OrderCopy";


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

      </Routes>
      <Footer/> 
    </BrowserRouter>
  
    </div> 
  );
}

export default App;
