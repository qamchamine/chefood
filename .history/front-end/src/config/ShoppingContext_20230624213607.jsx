 
  import React, { createContext, useState, useEffect } from 'react';
  import Swal from 'sweetalert2'

   const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
    const [orders,setOrders] = useState([])
    
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



