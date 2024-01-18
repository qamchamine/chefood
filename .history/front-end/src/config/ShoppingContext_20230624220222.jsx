 
  import React, { createContext, useState, useEffect } from 'react';
  import Swal from 'sweetalert2'
  import axios from 'axios';

   const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
    const [orders,setOrders] = useState([])
    
    useEffect(() => {
axios.get('http://127.0.0.1:8000/api/order')
.then(res)
    }, []);
/*       function removeFromCart(item){
        setCartItems(cartItems.filter(product => product.id !== item.id));  
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been removed',
          showConfirmButton: false,
          timer: 1500
        });
      } */
    
      return (
    <ShoppingContext.Provider value={
        {
          products,  cartItems, removeFromCart
        }
      }>      {children}
    </ShoppingContext.Provider>
  );
};
export { ShoppingContext, ShoppingProvider }



