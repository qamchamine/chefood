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

/* useEffect(() => {
  setUserOrders(orders.filter(el=>el.user_id === 1)) 

  console.log(userOrders);
},[]); */

    return (
        <div className="row my-4 cart-page ">
            <h1 className='text-center fs-3'>Orders</h1>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table table-light ajouterPanierTable table-bordered">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Image</th>
                                    <th >Name</th>
                                    <th >Quantity</th>
                                    <th >Price</th>
                                    <th>Subtotal</th>
                                    <th >Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            { isLoggedIn?orders.map((item,i) => (
                                    <tr key={item.id}>
                                        
                                        <th scope="row">{i+1}</th>
                                        <td>
                                            <img src={require(`../../../images/products/${prod.find(el=>el.id==item.product_id).category} (${prod.find((el,i)=>el.id===item.product_id).img}).png`)} alt={item.product_name} 
                                                className="img-fluid rounded" 
                                                width={60} height={60} />
                                        </td>
                                        <td>{item.product_name}</td>
                                        <td>
         
                                            <b className="mx-2">
                                                {item.product_quantity}
                                            </b>
      
                                        </td>
                                        <td>{prod.find((el,i)=>el.id===item.product_id).price} <b>MAD</b> </td>
                                       <td>{(item.product_quantity * prod.find((el,i)=>el.id===item.product_id).price).toFixed(2)} <b>MAD</b> </td>
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
                            <tr className='cart-footer'>
                                <th  colSpan={6} className="text-start ps-5 text-light" style={{background:'#982727'}}>
                                    Total
                                </th>
                                <th style={{background:'#982727'}} colSpan={1} className=" py-3 text-light">
                                    <span style={{background:'#982727aa',fontSize:'.9em'}} className="badge text-center p-1 rounded-pill shadow-sm pe-3" 
                                    >
                                        
                                        {
                                            orders.reduce((acc,item) => acc += item.product_quantity * prod.find((el,i)=>el.id===item.product_id).price,0).toFixed(2)
                                        } MAD
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
