import '../../css/contactus.css'

import UserPhoto from '../../images/contactuser.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ContactUs = () => {
    return (
        <div>
            <div className='container justify-items-center pt-4 mt-4'>
                <div className='d-flex justify-content-center '>
                    <h1 className='text-center contactus-color'>contact us</h1>
                </div>
                <div className='main-contactus'>
                    <div className='image-contactus'>
                        <img src={UserPhoto}/>
                    </div>
                    <div className='message-information-send'>
                        <label>Full Name :</label> <br/>
                        <input type='text' name='fname' placeholder='Write your full name ..'/><br/>
                        <label>Email :</label> <br/>
                        <input type='text' name='fname' placeholder='Your Email here..'/><br/>
                        <label>Description :</label> <br/>
                        <textarea type='text' name='fname' placeholder='Your message..'></textarea>
                        <br/>
                        <button className='send-contact-btn'><FontAwesomeIcon className='send-icon' icon={faEnvelope} />Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default ContactUs;