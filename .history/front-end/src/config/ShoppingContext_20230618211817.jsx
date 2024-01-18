
import {createContext} from 'react';

export const ShoppingContext = createContext();
const [products,setProducts] = useState([
    {
      id: 1, 
      name: 'Iphone 12',
      price: 700,
      image: 'https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg'
    },
    {
      id: 2, 
      name: 'Samsung s10',
      price: 400,
      image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg'
    },
    {
      id: 3, 
      name: 'Samsung Tv',
      price: 350,
      image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg'
    },
    {
      id: 4, 
      name: 'Huwawei Mate',
      price: 550,
      image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
    }
  ]);
  const [cartItems,setCartItems] = useState([]);

  function addToCart(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      item.quantity = 1;
      setCartItems([item,...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  function incrementQ(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function decrementQ(item){
    let productItem = cartItems.find(product=> product.id === item.id)
    let exists = cartItems.find(product => product.id === item.id);
    if(exists){
      productItem.quantity -= 1;
      if(productItem.quantity === 0){
        setCartItems(cartItems.filter(product => product.id !== item.id));       
      }else{
        setCartItems([...cartItems]);
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function removeFromCart(item){
    setCartItems(cartItems.filter(product => product.id !== item.id));  
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your item has been removed',
      showConfirmButton: false,
      timer: 1500
    });
  }

  <ShoppingContext.Provider value={
    {
      products, addToCart, incrementQ,
      decrementQ, cartItems, removeFromCart
    }
  }></ShoppingContext.Provider>








  import React, { createContext, useState, useEffect } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
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
    <LoginContext.Provider value={{ isLoggedIn, login, logout, userData, setUserData, prod, setProd, loading, setLoading, formData, setFormData ,isLoggedFromOffers,setIsLoggedFromOffers}}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginProvider };



