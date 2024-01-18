import React from "react";
import ReactDOM from "react-dom";
import PdfTicket from "../../small_components/TicketPdf";
import ReactFullpage from "@fullpage/react-fullpage";
import room1 from '../../../images/room.png'
import room2 from '../../../images/room2.png'
import room3 from '../../../images/room3.png'
import privateroom1 from '../../../images/privateroom1.jpg'
import privateroom2 from '../../../images/privateroom2.jpg'
import privateroom3 from '../../../images/privateroom3.png'
import hall1 from '../../../images/hall1.jpg'
import hall2 from '../../../images/hall2.jpg'
import hall3 from '../../../images/hall3.jpg'
import { LoginContext } from "../../../config/LoginContext";
import '../../../css/reservation.css'
import ReservationSection from "../../small_components/ReservationSection";
import ButtonMain from '../../small_components/ButtonMain'
import Footer from '../../Footer'
import $ from 'jquery'
import axios from 'axios'
const SEL = "custom-section"; 




var currentDate = new Date();
var currentDateTimeString = currentDate.toISOString().slice(0, 16);


const SECTION_SEL = `.${SEL}`;
const pluginWrapper = () => {
};
const originalColors = [
  "#F7F2E7",
  "#F7F2E7",
  "#F7F2E7"
];

export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text:
            <ReservationSection val={'table'} img1={room1} img2={room2} img3={room3} title={'Book a Table'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  aliqua.'} />
        },
        {
          text:
            <ReservationSection val={'room'} img1={privateroom1} img2={privateroom2} img3={privateroom3} title={'Private Room'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  aliqua.'} />
        },
        {
          text:
            <ReservationSection val={'hall'} img1={hall1} img2={hall2} img3={hall3} title={'Banquet Hall'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  aliqua.'} />
        }
        ,
        {
          text:
            <div style={{ height: 'fit-content', position: 'absolute', bottom: '0', zIndex: '100000000000', fontSize: '1rem', background: 'blue', width: '100%' }}>
              <Footer />
            </div>
        }
      ],
      formData: {
        service: 'f',
        date: '',
        time: '',
        img: 1
      },
      reservationData: {
        full_name: 'abdelGhani Dari',
        cin: 'W121212',
        email: is,
        contact_number: '',
        date: currentDateTimeString,
        service_type: 'table',
        ticket_code: ""
      },
      formErrors: {},
      submitted: false
    };
    const { isLoggedIn, login, logout } = useContext(LoginContext);

  }
componentDidMount(){
  $(function () { 
    $('#bookNowBtn').click(function () { 
      $('#serviceTypeSelect').val($(this).parents('.contentreservation').find('h2').attr('data-title'))    })
  })
}
 componentDidUpdate(){

setTimeout(() => {
  
  this.setState({reservationData:{...this.state.reservationData,ticket_code:sessionStorage.getItem('ticketCode')}})
}, 200);
/*         console.log(this.state.reservationData.ticket_code)
 */


 }

  handleClick = () => {
    var dateTimeValue = $('#date').val();
    var date = new Date(dateTimeValue);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString();
    var formattedDate = day + '/' + month + '/' + year;

    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var formattedTime = hours + ':' + minutes;

    this.setState({
      formData: {
        ...this.state.formData,
        service: `${$('#serviceTypeSelect').val().toUpperCase()}`,
        date: formattedDate,
        time: formattedTime,
        img: 2
      }
    });
  };
  onLeave(origin, destination, direction) {
    /*     console.log("onLeave", { origin, destination, direction });  */
  }

  handleSubmitReservation = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/reservation', this.state.reservationData)
      .then((res) => { 
        $('.printTicketBtn').removeClass('disabled-btn')
        document.querySelector('.successReservation').classList.add('reserved-with-success')
        setTimeout(() => {
          document.querySelector('.successReservation').classList.remove('reserved-with-success') 
        }, 2000);
        this.setState({ submitted: true })
        console.log(this.state.submitted)
      })
      .catch(err => {
        this.setState({ submitted: false })
        if (err.response && err.response.status === 422) {
          this.setState({
            formErrors: {
              ...err.response.data.errors
            }
          })
        }
      })
  }
  handleChangeReservation = (e) => {
    let { name, value } = e.target
    this.setState({
      reservationData: {
        ...this.state.reservationData,
        [name]: value
      }
    })
  }







  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100
        }}
      ></div>
    );

    return (
      <div className="App" onClick={this.handleClick} style={{ marginTop: '-5.5em' }}>
        <Menu />
        <div className="alertReser">
          <span className="successReservation py-3 fs-2 px-5  alert alert-success rounded-3 text-light bg-success fa fa-check">
          </span>
        </div>

        <div className="modal fade" id="exampleModal" /* tabindex="-1" */ style={{ zIndex: '100000' }} >
          <div className="modal-dialog ">
            <form onSubmit={(e) => this.handleSubmitReservation(e)} >
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">New Reservation</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                  <div className="d-grid ">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2">

                      <div className="col mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Full name :</label>
                        <input type="text" className="form-control" name="full_name" value={this.state.reservationData.full_name} onChange={(e) => this.handleChangeReservation(e)} id="name" />
                        {this.state.formErrors.full_name && <small className="text-danger opacity-75 ps-2">{this.state.formErrors.full_name[0]}</small>}
                      </div>

                      <div className="col mb-3">
                        <label htmlFor="cin" className="col-form-label">CIN :</label>
                        <input type="text" className="form-control" name="cin" value={this.state.reservationData.cin} onChange={(e) => this.handleChangeReservation(e)} id="cin" />
                        {this.state.formErrors.cin && <small className="text-danger opacity-75 ps-2">{this.state.formErrors.cin[0]}</small>}
                      </div>

                      <div className="col mb-3">
                        <label htmlFor="email" className="col-form-label">Email :</label>
                        <input type="email" className="form-control" name='email' value={this.state.reservationData.email} onChange={(e) => this.handleChangeReservation(e)} id="email" />
                        {this.state.formErrors.email && <small className="text-danger opacity-75 ps-2">{this.state.formErrors.email[0]}</small>}
                      </div>

                      <div className="col mb-3">
                        <label htmlFor="contact_number" className="col-form-label">contact Number :</label>
                        <input type="tel" className="form-control" name="contact_number" value={this.state.reservationData.contact_number} onChange={(e) => this.handleChangeReservation(e)} id="contact_number" />
                        {this.state.formErrors.contact_number && <small className="text-danger opacity-75 ps-2">{this.state.formErrors.contact_number[0]}</small>}
                      </div>


                      <div className="col mb-3">
                        <label htmlFor="date" className="col-form-label">Date & Time :</label>
                        <input type="datetime-local" name="date" value={this.state.reservationData.date} onChange={(e) => this.handleChangeReservation(e)} className="form-control" id="date" />
                        {this.state.formErrors.date && <small className="text-danger opacity-75 ps-2">{this.state.formErrors.date[0]}</small>}
                      </div>

                      <div className="col mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Select the service :</label>
                        <select className="form-select" name="service_type" value={this.state.reservationData.service_type} onChange={(e) => this.handleChangeReservation(e)} id="serviceTypeSelect">
                          <option value="table" key="1">Book a table</option>
                          <option value="room" key="2">Private room</option>
                          <option value="hall" key="3" >Banquet hall</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="modal-footer">
                  <div className="pt-2 d-flex gap-3">
                   {/*  {this.state.submitted ? */} <PdfTicket img={this.state.formData.service === 'TABLE' ? room3 : this.state.formData.service === 'ROOM' ? privateroom1 : hall1} service={this.state.formData.service} date={this.state.formData.date} time={this.state.formData.time} submit={this.state.submitted} /> {/* : ''} */}
                    {/* <PdfTicket img={this.state.formData.service === 'TABLE' ? room3 : this.state.formData.service === 'ROOM' ? privateroom1 : hall1} service={this.state.formData.service} date={this.state.formData.date} time={this.state.formData.time} submit={this.state.submitted} /> */}
                    <ButtonMain btnContent='VALIDATE' filled='1' btnType='1' />

                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-4">
        </div>



        <ReactFullpage
          /* debug */
          pluginWrapper={pluginWrapper}
          licenseKey={"YOUR_KEY_HERE"}
          navigation
          anchors={["book_table", "private_room", "banquet_hall"]}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={(comp) => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }, i) => (
                <div key={i} className={`section ${SEL}`}>
                  {/*                   <i className="blockCorner position-absolute" style={{bottom:'0',right:'0', width:'100px',height:'5em',zIndex:'100000000',background:'#F7F2E7'}}></i> */}
                  <div className="slide text-center ">
                    <h3>{text}</h3>
                  </div>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

