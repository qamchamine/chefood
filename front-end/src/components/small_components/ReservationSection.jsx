import React, { useEffect } from 'react'
import ButtonMain from './ButtonMain'








export default function ReservationSection({ img1, img2, img3, title, text,val ,nextImg,prevImg }) {
   var nextImage = (event) => {
    var imagesContainer = event.target.previousElementSibling ; 
    imagesContainer.scrollLeft < 500 ? imagesContainer.scrollLeft = 400 : imagesContainer.scrollLeft > 400 ? imagesContainer.scrollLeft = 1000 : imagesContainer.scrollLeft = 0
  }
   var prevImage = (event) => {
    var imagesContainer = event.target.nextElementSibling;
    imagesContainer.scrollLeft > 700 ? imagesContainer.scrollLeft = 400 : imagesContainer.scrollLeft > 300 ? imagesContainer.scrollLeft = 0 : imagesContainer.scrollLeft = 0
  } 
  
  return (
    <div style={{ fontSize: '1rem', overflowY: 'hidden' }} className="d-grid container-fluid">
      <div className=" row">
        <div className="col  d-flex align-items-center">
          <div className="contentreservation container w-75 px-4 gap-3 d-flex flex-column align-items-start">
            <h2 data-title={val}>{title}</h2>
            <p className="text-start " style={{ lineHeight: '1.4em' }}>{text}</p>
            <span id='bookNowBtn' className='bookNowBtn' data-bs-toggle="modal" data-bs-target="#exampleModal"><ButtonMain btnContent='BOOK NOW' filled='1' /></span> 
          </div>
        </div>
        <div className="col  d-flex h-100 me-5">
          <div className="rightSide d-flex b h-100">
            <span className="fa fa-angle-left arrow arrow-prev"  onClick={(event) => prevImage(event)}></span>
            <div className="images-res" >
              <i className="curve1"></i>
              <i className="curve2"></i>
              <img className="reservation-img i-1" src={img1} alt="" />
              <img className="reservation-img i-2" id="i2" src={img2} alt="" />
              <img className="reservation-img i-3" src={img3} alt="" />
            </div>
            <span className="fa fa-angle-right  arrow arrow-next" onClick={(event) => nextImage(event)}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
