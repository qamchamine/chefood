import React, { useContext } from 'react';
import '../../css/register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { LoginContext } from '../../config/LoginContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingContext } from '../../config/ShoppingContext';
export default function LogIn() {
  const navigate = useNavigate();
  const { isLoggedIn, login/* , logout */ } = useContext(LoginContext);
  const { isLoggedFromOffers, setIsLoggedFromOffers } = useContext(LoginContext);
  const { userData, setUserData } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {orders, setOrders} = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    axios.post('http://localhost:8000/api/users/login', { email, password })
      .then(res => {
        setUserData({ ...userData, ...res.data.user })
        setOrders([...orders , ...res.data.user_orders])
        login()
   /*      var obj = JSON.stringify(userData)
        localStorage.setItem('userData', obj)  */
      })
      .catch(err => {
        console.error(err)
        setError('Invalid username or password')
      })
  };

  return (
    <div className='FormRegister row'>
      {isLoggedIn && !isLoggedFromOffers ? navigate('/') : isLoggedIn && isLoggedFromOffers ? navigate('/offers'):(
        <form onSubmit={handleLogin} style={{ marginLeft: '7em' }} className='pb-4 col-12 col-sm-12 col-md-6'>
          {error && <p>{error}</p>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label" >Email :</label>
            <input type="email" className="form-control Semail" id="email" placeholder='Enter your email ...' value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" >Password :</label>
            <input type="password" className="form-control Spassword" id="password" placeholder='Enter your password ...'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="text-center mb-2 d-flex justify-content-end forget">
            <Link to="#forgot-password" className='text-muted'>Forgot Password?</Link>
          </div>
          <div className='bottonsingin'>
            <div className="d-grid gap-3 mt-3">
              <button type="submit" className="btn btn-primary singinB" >Log In</button> 
              <button type="button" className="btn buttonAuth2 ">
                <i className="fa fs-5 me-3 fa-google"></i>Sign In with Google
              </button>
            </div>
          </div>
          <div className="text-center mt-4 text-dark d-flex justify-content-end liensingup">don't have an account ?
            <Link to="/register" className='text-decoration-none fw-bold' style={{ color: '#982727' }}> Sing Up</Link>
          </div>
        </form>)}
    </div>
  );
} 