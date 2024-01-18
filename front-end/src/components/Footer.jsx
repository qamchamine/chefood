import React, { useEffect } from 'react'

import Facebook from '../images/icons/facebook.png'
import Linkedin from '../images/icons/linkedin.png'
import Instagram from '../images/icons/instagram.png'
import Twitter from '../images/icons/twitter.png'
import Whatsapp from '../images/icons/whatsapp.png'
import './../css/nav-footer.css'; 
export default function Footer() {

    return (
        <div className='footer container-fluid' style={{ background: '#982727' }}>
            <footer className=' py-2 pt-5 d-grid text-light'>
                <div className='row justify-content-around text-center '>
                    <div className='d-grid col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                        <h5>Product</h5>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                    </div>
                    <div className='d-grid col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                        <h5>Product</h5>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                    </div>
                    <div className='d-grid col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                        <h5>Product</h5>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                    </div>
                    <div className='d-grid col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                        <h5>Product</h5>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                        <a className='text-decoration-none text-light opacity-50' href="">Product item</a>
                    </div>
                </div>
                <div className='footer-icons row justify-content-center py-3 '>
                    <div className='d-flex gap-2 justify-content-center'>
                        <a href=""> <img src={Facebook} className='footer-icon' alt="" /> </a>
                        <a href=""> <img src={Linkedin} className='footer-icon' alt="" /> </a>
                        <a href=""> <img src={Instagram} className='footer-icon' alt="" /> </a>
                        <a href=""> <img src={Twitter} className='footer-icon' alt="" /> </a>
                        <a href=""> <img src={Whatsapp} className='footer-icon' alt="" /> </a>

                    </div>
                </div>
                <div className='row justify-content-center py-3'>
                    © 2022 — 2023 Privacy — Terms
                </div>
            </footer>
        </div>

    )
}
