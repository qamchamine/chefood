import '../../css/faq.css';

import PlayIcon from '../../images/iconplay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'



const HowCan = () => {
    return (
<div>
    <div className='container'>
        <div className='d-flex justify-content-center my-5'>
            <h1 className='text-center howcan-color'>How can we help you ?</h1>
        </div>

        <div className="input-group mb-3 justify-content-center">
                <input type="text" className="form-control" placeholder="Search"/>
            <div className="input-group-append">
                <button className="btn btn-howcan-icon" type="button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        </div>

        <div className='row acount-help-all-card'>
            <div className="card acount-help-card">
                    <h5 className="card-title">Account help</h5>
                        <p className="card-text">Can’t remameber login details.</p>
            </div>
            <div className="card acount-help-card">
                    <h5 className="card-title">Account help</h5>
                        <p className="card-text">Can’t remameber login details.</p>
            </div>
            <div className="card acount-help-card">
                    <h5 className="card-title">Account help</h5>
                        <p className="card-text">Can’t remameber login details.</p>
            </div>                      
        </div>
        


        <div className="row acount-help-all-card helpers-methode">
            <div className="helpers-card">
                <div className="card-body">
                    <h6 className="card-title acount-help-title">Account & Payment</h6>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                                How can create account ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to rest password ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to buy order ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How can i order  ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to buy in card visa ?
                        </p>
                    </div>

                </div>
                
            </div>
            <div className="helpers-card">
                <div className="card-body">
                    <h6 className="card-title acount-help-title">Reserve & delivery</h6>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How can i change delivery address ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        What are the terms an conditions?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How can reserve table ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How reserve room ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        Can cancel my order?
                        </p>
                    </div>

                </div>
                
            </div>
            <div className="helpers-card">
                <div className="card-body">
                    <h6 className="card-title acount-help-title">Account & Payment</h6>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                                How can create account ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to rest password ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to rest password ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to rest password ?
                        </p>
                    </div>
                    <div className='icon-and-help'>
                        <a href='#' className='icon-triangle'>
                                <img src={PlayIcon} alt=''/>
                            </a>                    
                        <p className="card-text acount-help">
                        How to rest password ?
                        </p>
                    </div>

                </div>
                
            </div>

            
        </div>
    </div>
</div>


    );
  }
  
export default HowCan;