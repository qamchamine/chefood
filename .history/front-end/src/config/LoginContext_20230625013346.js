import React, { createContext, useState, useEffect } from 'react';
import { getProd } from '../components/pages/sub-pages/Products';
import axios from 'axios';
const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState([]);
  const [prodOrder, setProdOrder] = useState({});
  const [isLoggedFromOffers, setIsLoggedFromOffers] = useState(false);
  const [orders,setOrders] = useState([])




  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: null,
    admin: 0
  });




  const [formData, setFormData] = useState({
    product_name: '',
    product_quantity: 1,
    full_name:'' ,
    location: 'kkkkkk',
    payment_method: 'cash on delivery',
    delivery_offer: 'normal',
    user_id:null
  });



  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedLoggedIn !== null) {
      setLoggedIn(storedLoggedIn === 'true');
    }
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('isLoggedIn', isLoggedIn);

  }, [userData, isLoggedIn,orders]); 
  
  const login = () => { 
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserData({});
    setOrders([]);
    localStorage.removeItem('userData');
    localStorage.removeItem('orders');
    setIsLoggedFromOffers(false)
  };
  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, userData, setUserData, prod, setProd, loading, setLoading, formData, setFormData ,isLoggedFromOffers,setIsLoggedFromOffers,orders,setOrders,prodOrder, setProdOrder}}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };



