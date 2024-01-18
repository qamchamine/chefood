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
  
/*   function getOrders(setOrders){ 
    axios.get('http://127.0.0.1:8000/api/order')
    .then((res) => {
      setOrders(res.data.orders) 
    }) 
  }
 */


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

    const storedProd = localStorage.getItem('prod');
    if (storedProd) {
      setProd(JSON.parse(storedProd));
    } 
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('prod', JSON.stringify(prod));
    orders.length>0 && localStorage.setItem('orders', JSON.stringify(orders));
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



  function removeFromCart(item){
    setOrders(orders.filter(order => order.id !== item.id));  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your item has been removed',
      showConfirmButton: false,
      timer: 1500
    });
  }




  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, userData, setUserData, prod, setProd, loading, setLoading, formData, setFormData ,isLoggedFromOffers,setIsLoggedFromOffers,orders,setOrders , removeFromCart}}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };


