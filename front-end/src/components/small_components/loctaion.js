import '../../css/location.css';

import Earth from '../../images/pangwing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const LocationAbout = () => {
    return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center my-5'>
                <h1 className='text-center location-color'>Location</h1>
        </div>
        <div className='main-location'>
            <div className='where-restorant'>
                <h3 className='restorant-location-title'>Where is our restaurant?</h3>
                <span className='restorant-location-line'></span>
                <p className='restorant-location-p'>We invite you to visit our restaurant and experience our delicious menu and exceptional service. Our warm and welcoming atmosphere is the perfect setting for a meal with family and friends, or a special occasion. To find us, simply click the button below to view our location on a map. We look forward to seeing you soon!</p>
                <button className='restorant-location-btn'><FontAwesomeIcon className='location-icon' icon={faLocationDot} />Location</button>
            </div>
            <div className='earth-image'>
                <img src={Earth} alt=''/>
            </div>
        </div>
    </div>

    </div>  
  );
}

export default LocationAbout;