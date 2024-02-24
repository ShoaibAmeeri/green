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
import Error from "./components/Error";
import BookShow from "./components/BookShow";
import ChangePass from "./pages/SignIn/ChangePass";
import ConfirmOrder from "./pages/Order/ConfirmOrder";
import Logout from "./pages/SignIn/Logout";

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
        <Route path="/logout" element={ <Logout/> }/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/changepass" element={ <ChangePass/> }/>
        <Route path="/books/:id" element={<BookShow/>} />
        <Route path="/confirm-order" element={<ConfirmOrder/>} />
        <Route path="/*" element={ <Error/> }/>


      </Routes>
      <Footer/> 
    </BrowserRouter>
  
    </div> 
  );
}

export default App;
