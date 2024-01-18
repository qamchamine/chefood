import React from 'react'
import img1 from '../../../images/gallery/img (1).jpg'
import img2 from '../../../images/gallery/img (2).jpg'
import img3 from '../../../images/gallery/img (3).jpg'
import img4 from '../../../images/gallery/img (4).jpg'
import img5 from '../../../images/gallery/img (5).jpg'
import img6 from '../../../images/gallery/img (6).jpg'
import img7 from '../../../images/gallery/img (7).jpg'
import img8 from '../../../images/gallery/img (8).jpg'
import img9 from '../../../images/gallery/img (9).jpg'
import img10 from '../../../images/gallery/img (10).jpg'
import img11 from '../../../images/gallery/img (11).jpg'
import img12 from '../../../images/gallery/img (12).jpg'
import '../../../css/explore.css'
export default function Gallery() {
  return (
    <div className='gallery'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
  </div>
  <div className="carousel-inner">
  <div className='carousel-item active'> <img src={img1} className="d-block w-100  gallery-img" alt="..."/> </div>
  <div className='carousel-item'  > <img src={img2} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img3} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img4} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img5} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img6} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img7} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img8} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img9} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img10} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img11} className="d-block w-100  gallery-img " alt="..."/> </div>
  <div className='carousel-item'  > <img src={img12} className="d-block w-100  gallery-img " alt="..."/> </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
