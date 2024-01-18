
import {createContext} from 'react';

export const ShoppingContext = createContext();
  <ShoppingContext.Provider value={
    {
      products, addToCart, incrementQ,
      decrementQ, cartItems, removeFromCart
    }
  }></ShoppingContext.Provider>








  import React, { createContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [prod, setProd] = useState([]);
  const [isLoggedFromOffers, setIsLoggedFromOffers] = useState(false);




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
    full_name: '',
    location: '',
    payment_method: 'cash on delivery',
    delivery_offer: 'normal'
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
  }, []);
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [userData, isLoggedIn]);


  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setUserData({});
    localStorage.removeItem('userData');
    setIsLoggedFromOffers(false)
  };
  return (
    <ShoppingContext.Provider value={
        {
          products, addToCart, incrementQ,
          decrementQ, cartItems, removeFromCart
        }
      }>      {children}
    </ShoppingContext.Provider>
  );
};
export { ShoppingContext, ShoppingProvider };



