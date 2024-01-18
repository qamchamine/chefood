import React,{useContext ,useEffect, useState} from 'react';
import axios from 'axios';
import '../../../css/cart.css'
import getOrders from '../../../config/LoginContext';
import { ShoppingContext } from '../../../config/ShoppingContext';
import { LoginContext } from '../../../config/LoginContext';
import { getProd } from '../../pages/sub-pages/Products';
export default function Cart() {
    const {orders, setOrders} = useContext(LoginContext);
    const {prod, setProd} = useContext(LoginContext);
    const {userData, setUserData} = useContext(LoginContext);
    const {loading, setLoading} = useContext(LoginContext);
    const [userOrders, setUserOrders] = useState([]);

useEffect(() => {
setUserOrders([orders.filter(el=>el.user_id === userData.id)])
console.log(userOrders)
}, [orders]);

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
                            {
                               
                    
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
