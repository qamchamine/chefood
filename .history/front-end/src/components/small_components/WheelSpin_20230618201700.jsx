import React, { useEffect,useContext } from 'react'
import '../../css/spinWheel.css'
import applause from '../../sounds/applause.mp3'
import wheel from '../../sounds/wheel.mp3'
import {Link} from 'react-router-dom'
import swal from 'sweetalert2'
import { LoginContext } from '../../config/LoginContext'
export default function WheelSpin() {
  const { isLoggedIn } = useContext(LoginContext);
  const { isLoggedFromOffers, setIsLoggedFromOffers } = useContext(LoginContext);

useEffect(() => {


    function shuffle(array) {
        var currentIndex = array.length,
          randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
      
        return array;
      }
      
      document.querySelector('.spin').addEventListener('click',spin)
      function spin() {
        // Play the sound
        document.querySelector('#wheel').play();
        // Inisialisasi variabel
        const box = document.getElementById("box");
        const element = document.getElementById("mainbox");
        let SelectedItem = "";
      
        let MagicRoaster = shuffle([1890, 2250, 2610]);
        let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
        let RiceCooker = shuffle([1810, 2170, 2530]);
        let LunchBox = shuffle([1770, 2130, 2490]);
        let Sanken = shuffle([1750, 2110, 2470]);
        let Electrolux = shuffle([1630, 1990, 2350]);
        let JblSpeaker = shuffle([1570, 1930, 2290]);
      
        // Bentuk acak
        let Hasil = shuffle([
          MagicRoaster[0],
          Sepeda[0],
          RiceCooker[0],
          LunchBox[0],
          Sanken[0],
          Electrolux[0],
          JblSpeaker[0],
        ]);
        // console.log(Hasil[0]);
      
        // Ambil value item yang terpilih
        if (MagicRoaster.includes(Hasil[0])) SelectedItem = "50% Discount";
        if (Sepeda.includes(Hasil[0])) SelectedItem = " 05% Discount";
        if (RiceCooker.includes(Hasil[0])) SelectedItem = "01% Discount";
        if (LunchBox.includes(Hasil[0])) SelectedItem = "Luck over the next time";
        if (Sanken.includes(Hasil[0])) SelectedItem = "01% Discount";
        if (Electrolux.includes(Hasil[0])) SelectedItem = "25% Discount";
        if (JblSpeaker.includes(Hasil[0])) SelectedItem = "05% Discount";
      
        // Proses
        box.style.setProperty("transition", "all ease 5s");
        box.style.transform = "rotate(" + Hasil[0] + "deg)";
        element.classList.remove("animate");
        setTimeout(function () {
          element.classList.add("animate");
        }, 5000);
      
        // Munculkan Alert
        setTimeout(function () {
            document.querySelector('#applause').play();
/*           swal(
            "Congratulations",
            "You Won The " + SelectedItem + ".",
            "success"
          ); */


         new swal({
            title: "Congratulations",
            text: "You Won The " + SelectedItem + ".",
            icon: "success",
            buttons: {
              confirm: {
                text: "CLAIM REWARD",
                value: true,
                className: "claim-btn"
              },
            },
          })
          .then((value) => {
            // The user clicked the "OK" button
/*             console.log("User clicked OK");
 */          });


        }, 6000);
      
        // Delay and set to normal state
        setTimeout(function () {
          box.style.setProperty("transition", "initial");
          box.style.transform = "rotate(90deg)";
        }, 9000);
      }
      

}, []);

var handleOffersToAuth = ()


  return (
    <div className="spinner-wheel ">
    <div className="mainbox" id="mainbox">
      <div className="box" id="box">
        <div className="box1">
          <span className="font span1"><b >  Luck over next </b></span>
          <span className="font span2"><b>05% Discount</b></span>
          <span className="font span3"><b>50% Discount</b></span>
          <span className="font span4"><b> 05%  Discount</b></span>
          <span className="font span5"><b> 01% Discount <br />
              </b></span>
        </div>
        <div className="box2">
          <span className="font span1"><b>Luck over the next time</b></span>
          <span className="font span2"><b>01% Discount </b></span>
          <span className="font span3"><b>Luck over </b></span>
          <span className="font span4"><b>Luck over next</b></span>
          <span className="font span5"><b>25% free</b></span>
        </div>
      </div>

      <div className="text-center">

	<button  className={`spin ${isLoggedIn?'':'d-none'} ` } >SPIN</button>
  {isLoggedIn?'':<button  className="trigger-btn spin" data-bs-toggle="modal" data-bs-target="#myModal">SPIN</button>}
	
</div>

<div id="myModal" className="modal ">
	<div className="modal-dialog position-relative modal-confirm">
		<div className="modal-content ">
			<div className="modal-header flex-column">
                <button type="button" className="btn-close " style={{translate:'80% -80%'}} data-bs-dismiss="modal" ></button>
				<div className="icon-box">
					<i className="material-icons">warning</i>
				</div>						
				<h4 className="modal-title w-100 ">You need to login first !</h4>	
			</div>
			<div className="modal-body">
				<p>Do you really want to delete these records? This process cannot be undone.</p>
			</div>
			<div className="modal-footer justify-content-center gap-4">
				
        <Link to='/register' className="btn w-25 btn-secondary" 
        >Register</Link>
				
        <Link to='/login' className="btn w-25 px-4 " onClick={handleOffersToAuth}>Login</Link>
			</div>
		</div>
	</div>
</div>     













    </div>
    <audio controls="controls" id="applause" src={applause} type="audio/mp3"></audio>
    <audio controls="controls" id="wheel" src={wheel} type="audio/mp3"></audio>
    <div className='spinBase'></div>
<div className=' w-100 position-absolute top-100' style={{height:'3em',background:'#333',translate:'0 -90%'}}>
  
</div>

  </div>
  )
}
