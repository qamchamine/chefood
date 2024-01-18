import React,{useContext ,useEffect, useState} from 'react';
import axios from 'axios';
import '../../../css/cart.css'
import { ShoppingContext } from '../../../config/ShoppingContext';
import { LoginContext } from '../../../config/LoginContext';
import { getProd } from '../../pages/sub-pages/Products';
export default function Cart() {
    const {orders, setOrders} = useContext(LoginContext);
    const {prod, setProd} = useContext(LoginContext);
    const {userData, setUserData} = useContext(LoginContext);
    const {isLoggedIn} = useContext(LoginContext);
    const {loading, setLoading} = useContext(LoginContext);
    const [userOrders, setUserOrders] = useState([]);

    getOrders(setOrders)
useEffect(() => {
  setUserOrders(orders.filter(el=>el.full_name == 'user 2')) 
  console.log(orders)
}, []);

    return (
        <div className="row my-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table ajouterPanierTable">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Image</th>
                                    <th >Name</th>
                                    <th >Quantity</th>
                                    <th >Price</th>
                                    <th>Subtotal</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                            { isLoggedIn?userOrders.map(item => (
                                    <tr key={item.id}>
                                        
                                        <th scope="row">{item.id}</th>
                                        <td>
                {/*                             <img src={require(`../../../images/products/${prod.find(el=>el.id==item.product_id).category} (${prod.find((el,i)=>el.id===item.product_id).img}).png`)} alt={item.product_name} 
                                                className="img-fluid rounded" 
                                                width={60} height={60} /> */}
                                        </td>
                                        <td>{item.product_name}</td>
                                        <td>
         
                                            <span className="mx-2">
                                                {item.product_quantity}
                                            </span>
      
                                        </td>
                                        <td>{prod.find((el,i)=>el.id===item.product_id).price} <b>MAD</b> </td>
                              {/*          <td>{item.product_quantity * prod.find((el,i)=>el.id===item.product_id).price} MAD</td> */}
                                        <td>
                                            <i 
                                                className="bi bi-cart-x text-danger"
                                                style={{cursor: 'pointer'}}
                                          /*       onClick={() => removeFromCart(item)} */
                                            ></i>
                                        </td>
                                    </tr>
                                )): ''
                            }
                            <tr>
                                <th colSpan={3} className="text-center">
                                    Total
                                </th>
                                <th colSpan={3} className="text-center">
                                    <span className="badge bg-danger rounded-pill">
                                        $
                                      {/*   {
                                            cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                        } */}
                                    </span>
                                </th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
