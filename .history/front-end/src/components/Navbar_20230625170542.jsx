import React, { useContext/* , useEffect */ } from "react";
import { NavLink, Link } from "react-router-dom";
import "./../css/nav-footer.css";
import { LoginContext } from "../config/LoginContext";
import logoWhite from './../images/logo/logoWhite.png'
import { ShoppingContext } from "../config/ShoppingContext";
import axios from "axios";
/* import $ from "jquery"; */
export default function Navbar() {
  const { isLoggedIn, /* login, */ logout } = useContext(LoginContext);
  const { userData/* , setUserData  */} = useContext(LoginContext);
  const {cartItems} = useContext(ShoppingContext);
  const {orders, setOrders} = useContext(LoginContext);

  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/users/logout")
      .then((res) => {
        logout();
      })
      .catch((err) => {
        console.error(err);
      });
  };


const fillUserOrders = ()=>{
  
}



  return (
    <div
      className="nb container-fluid sticky-top mt-3"
      style={{ zIndex: "10" }}
    >
      <nav className="navbar  navbar-expand-md d-flex justify-content-between navbar-dark ">
        <span className="navbar-brand  "><img  style={{position:'absolute',top:'0%',left:'1%',translate:'0 40%'}} height={30} src={logoWhite} alt="logo" /></span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarNav"
        >
          <ul className="navbar-nav nav gap-1 ps-4 ps-md-0 justify-content-center w-100">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                SERVICES
              </span>
              <ul className="dropdown-menu">
                <i className="arrowNav"></i>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/online-ordering"
                  >
                    Online Ordering
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="services/reservation">
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="services/delivery">
                    Delivery
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/offers">
                OFFERS
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                EXPLORE
              </span>
              <ul className="dropdown-menu">
                <i className="arrowNav"></i>

                <li>
                  <NavLink className="dropdown-item" to="/explore/products">
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/explore/gallery">
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                ABOUT
              </NavLink>
            </li>
          </ul>
          <Link onClick={fillUserOrders} className="nav-link active text-light d-flex gap-1 me-4  fs-5" to="/cart">
            <i className="bi bi-cart-check-fill  "> </i> ({orders.length})
        </Link>
          {isLoggedIn ? (
            <div className="btn-group me-4 d-flex align-items-center">
              <button data-bs-toggle="dropdown" className="text-light btn">
                {userData.firstname}
              </button>
              <span
                data-bs-toggle="dropdown"
                style={{
                  background: userData.admin ? "var(--bs-success)" : "#d18343",
                }}
                className="profile-two-letters text-uppercase"
              > 
                {userData.firstname.charAt(0) +
                  userData.lastname.charAt(0)}
              </span> 
              <ul className="dropdown-menu profileDropDown">
                <i className="arrowNav profileArrow"></i>

                <li>
                  <NavLink className="dropdown-item" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <a onClick={handleLogout} className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (<>
            
            <NavLink
              to="/login"
              className="signUP me-4 btn btn-danger float-end rounded-pill px-4"
              style={{
                filter: "contrast(90%) brightness(140%)",
                width: "11em",
              }}
            >
              {" "}
              LOGIN{" "}
            </NavLink>
          </>
          )}
        </div>
      </nav>
      <div></div>
    </div>
  );
}
