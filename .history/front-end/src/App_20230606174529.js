import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar'
import Footer from "./components/Footer"; 
import Home from './components/pages/Home';
import Gallery from './components/pages/sub-pages/Gallery';
import Delivery from './components/pages/sub-pages/Delivery';
import Reservation from './components/pages/sub-pages/Reservation';
import Offers from './components/pages/Offers';
import About from './components/pages/About';

import Products from "./components/pages/sub-pages/Products"; 
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";
import OnlineOrdering from "./components/pages/sub-pages/OnlineOrdering"; 
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Routes, Route, useLocation  } from "react-router-dom";
import NotFound from "./components/exceptions/NotFound";
import Profile from "./components/small_components/Profile";
export default function App() {
    return (
        <div>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/services/delivery" element={<Delivery />} />
                <Route path="/services/reservation" element={<Reservation />} />
                <Route path="/services/online-ordering" element={<OnlineOrdering />} /> 
               <Route path="/explore/gallery" element={<Gallery />} />
                <Route path="/explore/products" element={<Products />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LogIn />} />
                <Route path='/*' element={<NotFound/>} /> 
                <Route path='/profile' element={<Profile/>} /> 
            </Routes> 
           
             <Footer />
        </div>
    );
}

