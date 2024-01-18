import React, { useState,useContext } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

import axios from 'axios';
import '../../css/register.css';
import $ from "jquery"
import { LoginContext } from '../../config/LoginContext';
$(function(){
/*   $('.FormRegister').height('100vh'-'10vh') */
})



export default function Register() {
  const { isLoggedIn, login, logout } = useContext(LoginContext);
  const { userData, setUserData } = useContext(LoginContext);

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    phone: '',
  }); 
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    axios
      .post('http://localhost:8000/api/users/register', formData)
      .then((response) => {
        setUserData({...userData,...response.data.user}) 
        login() 
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            setErrors(error.response.data.errors);
          } else {
            console.error(error);
          } 
        }); 
  };

  return (
    <div className="FormRegister row">
            {isLoggedIn && !isLoggedFromOffers ? navigate('/') : isLoggedIn && isLoggedFromOffers ? navigate('/offers')
       : (

      <form autoComplete="off" onSubmit={handleSubmit} style={{marginLeft:'7em'}} className='pb-4 col-12 col-sm-12 col-md-5'> 
          <div className="name mb-3 w-100 nameContainer">
            <div className="  col">
              <input autoComplete="off" type="text" name="firstname" className="form-control" id="firstName" placeholder="First Name" value={formData.firstname} onChange={handleChange} /> 
              {errors.firstname && <small className="text-danger opacity-75 ps-2">{errors.firstname[0]}</small>} 
            </div>
            <div className=" col">
              <input type="text" name="lastname" className="form-control" id="lastName" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
                {errors.lastname && <small className="text-danger opacity-75 ps-2">{errors.lastname[0]}</small>}
            </div>
          </div> 
          <div className="mb-3 col w-100">
            <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <small className="text-danger opacity-75 ps-2">{errors.email[0]}</small>}
          </div>
          <div className="mb-3 col w-100">
            <input type="password" name="password" className="form-control" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <small className="text-danger opacity-75 ps-2">{errors.password[0]}</small>}
          </div>
        <div className="mb-3 col w-100">
            <input type="password" name="password_confirmation" className="form-control" id="password_confirmation" placeholder="Password confirmation" value={formData.password_confirmation} onChange={handleChange} />
            {errors.password_confirmation && <small className="text-danger opacity-75 ps-2">{errors.password_confirmation[0]}</small>} 
        </div>
        <div className="mb-3 col w-100">
          <input type="text" name="address" className="form-control" id="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            {errors.address && <small className="text-danger opacity-75 ps-2">{errors.address[0]}</small>}
        </div>
        <div className="mb-3 col w-100">
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            />
            {errors.phone && <small className="text-danger opacity-75 ps-2">{errors.phone[0]}</small>}
        </div>
        <div className="groupButton w-100">
          <div className="w-100">
          <button type="button" className="btn  buttonAuth2">
            <i className="fa fa-google me-2"></i>Connect with Google
          </button> 
          <button type="submit" className="btn btn-primary buttonAuth">
            Sign Up
          </button>
          </div>
        </div>
        <p className="link d-flex mt-4 text-dark w-100 justify-content-end">
          Already have an account? <Link to="/login" className='fw-bold text-decoration-none' style={{color:'#982727'}}>Log in</Link>
        </p>
      </form>)}
    </div>
  );
}

























