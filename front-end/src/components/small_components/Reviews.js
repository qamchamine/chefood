import '../../css/Reviews.css';

import Stars from './StarsRating';
import profile1 from '../../images/profile1.png'
import profile2 from '../../images/profile2.png'
import profile3 from '../../images/profile3.png'
import profile4 from '../../images/profile4.png'
import CardRatingStar from '../../images/Star.png'
import StarsRating from './StarsRating';


const AboutReviews = () => {
  return (

<div>
    <div className='container'>
      <div className='d-flex justify-content-center my-5'>
        <h1 className='text-center Reviews-color'>Reviews</h1>
      </div>
      <div className='d-flex flex-column align-items-center mt-2'>
        <p className='row Reviews-paragraph  text-center col-12 col-lg-7'>
          Welcome to our reviews page! Here you can share your feedback and rate our services based on your experience with us. Your honest opinions help us improve our services and ensure that we provide the best possible experience to all of our customers. We appreciate your valuable input and look forward to hearing from you!
        </p>
        <div className='mt-5'>
            <StarsRating/>
        </div>
      </div>
    </div>

      <span className='opacity-50 fs-2'>--------------------------</span>


    <div className='container'>
      <div className="row parent-card">
      <div className="col-4 col-md-2 mx-auto card-1">
        <div className="card reviewCard rounded-3">
          <img src={profile1} className="mx-auto d-block reviewCardImage" alt="your-image-alt-text"/>
          <div className="card-body text-center">
            <h5 className="card-title user-name">User name</h5>
            <p className="card-text description">description :</p>
            <p className="card-text comment">Thank u for this idea, it deserve five stars</p>
            <strong >
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt='' className='hoverstar'/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
            </strong>
          </div>
        </div>
      </div>
      <div className="col-4 col-md-2 mx-auto card-2">
        <div className="card reviewCard rounded-3">
          <img src={profile2} className="mx-auto d-block reviewCardImage" alt="your-image-alt-text"/>
          <div className="card-body text-center">
            <h5 className="card-title user-name">User name</h5>
            <p className="card-text description">description :</p>
            <p className="card-text comment">Thank u for this idea, it deserve five stars</p>
            <strong >
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt='' className='hoverstar'/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
            </strong>
          </div>
        </div>
      </div>
      <div className="col-4 col-md-2 mx-auto card-3">
        <div className="card reviewCard rounded-3">
          <img src={profile3} className="mx-auto d-block reviewCardImage" alt="your-image-alt-text"/>
          <div className="card-body text-center">
            <h5 className="card-title user-name">User name</h5>
            <p className="card-text description">description :</p>
            <p className="card-text comment">Thank u for this idea, it deserve five stars</p>
            <strong >
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt='' className='hoverstar'/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
            </strong>
          </div>
        </div>
      </div>
      <div className="col-4 col-md-2 mx-auto card-4">
        <div className="card reviewCard rounded-3">
          <img src={profile4} className="mx-auto d-block reviewCardImage" alt="your-image-alt-text"/>
          <div className="card-body text-center">
            <h5 className="card-title user-name">User name</h5>
            <p className="card-text description">description :</p>
            <p className="card-text comment">Thank u for this idea, it deserve five stars</p>
            <strong >
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt='' className='hoverstar'/>
              <img src={CardRatingStar} alt=''/>
              <img src={CardRatingStar} alt=''/>
            </strong>
          </div>
        </div>
    </div>

  </div>

    </div>
    <span className='opacity-50 fs-2 the-bottom-page'>--------------------------</span>
</div>
  // react-simple-rating

    

  );
}

export default AboutReviews;
