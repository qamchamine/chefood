 
  import React, { createContext, useState, useEffect } from 'react';
  import Swal from 'sweetalert2'

   const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
    const [orders,setOrders] = useState([
    
/*       function incrementQ(item){
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
     */
/*       function decrementQ(item){
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
      } */
    
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



