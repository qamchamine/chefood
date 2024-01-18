import React from "react";
import normal from '../../../images/icons/normal.png';
import fast from '../../../images/icons/fast.png';
import faster from '../../../images/icons/faster.png';
import area from '../../../images/icons/map.png';
import box from '../../../images/icons/box.jpg';
import motor from '../../../images/icons/motor1.jpg';
import '../../../css/delivery.css'
import $ from 'jquery'
setInterval(() => {
  window.location.pathname==='/services/delivery' || window.location.pathname==='/explore/products' ?document.querySelector('body').classList.add('scroll-bar-activated') : document.querySelector('body').classList.remove('scroll-bar-activated')
}, 100);
class Delivery extends React.Component {

  render() {
    const deliveryCards = [
      {
        title: "NORMAL",
        items: ["Delivery to the coustomer’s place", "Delivery within 30 minutes to 45 minutes ", "Available 24|7"],
        img: normal,
        price: "FREE"
      },
      {
        title: "FAST",
        items: ["Delivery to the coustomer’s place", "Delivery within 20 minutes to 25 minutes ", "Track orders", "Available 24|7"],
        img: fast,
        price: "20MAD"
      },
      {
        title: "FASTER",
        items: ["Delivery to the coustomer’s place", "Delivery within 20 minutes to 25 minutes ", "Track orders", "Available 24|7", "Store orders"],
        img: faster,
        price: "30MAD"
      }
    ];
    const instructionsCards = [
      {
        title: "Select your delivery area",
        description: 'Fill in the address where you want to be delivered',
        img: area,
      },
      {
        title: "Choose your products",
        description: 'Browse stores that deliver near you.',
        img: box,
      },
      {
        title: "Receive it at your doorstep",
        description: 'Your order will be delivered to you in no time.',
        img: motor,
      }
    ];

    return (
      <div className="delivery-page mt-5 container d-grid gap-5">
        <h1 className=" text-center p-0 m-0">Delivery offers</h1>
        <hr className="p-0 m-0" />
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {deliveryCards.map((card, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">{card.title}</h5>
                  <h5 className="card-title text-center fw-bold my-3" style={{ height: '4em' }}><img src={card.img} alt="" /></h5>
                  <ul style={{ height: '13em' }} className="">
                    {card.items.map((item, index) => (
                      <li key={index} className="my-3"> <i className="fa fa-square-check me-3" style={{ color: '#982727' }}></i> {item}</li>
                    ))}
                  </ul>
                  <p className="card-text price mb-3" >{card.price}  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className=" section-2 text-center  ">How it works</h1>
        <hr className=" section-2 m-0 p-0 " />
        <div className="section-2 cards2  row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {instructionsCards.map((card, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold py-4">{card.title}</h5>
                  <h5 className="card-title text-center fw-bold my-4" style={{ height: '11em' }}><img src={card.img} alt="" /></h5>
                  <p className="text-center py-3">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Delivery;
