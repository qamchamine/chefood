 
  import React, { createContext, useState, useEffect } from 'react';
  import Swal from 'sweetalert2'
  import axios from 'axios';

   const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
/*     const [orders,setOrders] = useState([])
     */


    
      return (
    <ShoppingContext.Provider value={
        { /* orders,setOrders */
          /* products,  cartItems, removeFromCart */
        }
      }>      {children}
    </ShoppingContext.Provider>
  );
};
export { ShoppingContext, ShoppingProvider }



