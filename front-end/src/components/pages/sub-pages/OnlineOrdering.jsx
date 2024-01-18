import React from 'react'
import "../../../css/orderOnline.css";
import Order1 from "../../../images/order/order1.jpg";
import Order2 from "../../../images/order/order2.jpg";
import Order3 from "../../../images/order/order3.jpg";
import Order4 from "../../../images/order/order4.jpg";
import Order5 from "../../../images/order/order5.jpg";
import Order6 from "../../../images/order/order6.jpg";
import Order7 from "../../../images/order/order7.jpg";
import Order8 from "../../../images/order/order8.jpg";
import OrderCard from "../../small_components/OrderCard";

export default function OnlineOrdering() {
  return (
    <div className='order'>
      <div className='container  orderON'>
        <div className='text-center mb-5 pb-4 ' >
          <h1 className=' mb-2'>ORDER ONLINE</h1>
          <p>“If you don’t try this app, you won’t become the
            superhero you were meant to be”</p>
        </div>
        <div className="row ">
          <OrderCard
            img={Order1}
            title="Special Order"
            content="Mexican dish with a tortilla and various fillings"
          />
          <OrderCard
            img={Order2}
            title="Special Order"
            content=" Sandwich consisting of a grilled patty and toppings.

                "
          />
          <OrderCard
            img={Order3}
            title="Special Order"
            content="Deep-fried strips of potatoes, often served as a side."
          />
          <OrderCard
            img={Order4}
            title="Special Order"
            content="Spicy dish of meat or vegetables in Indian cuisine."
          />
        </div>

      </div>
      <div className='container orderON'>
        <div className='text-center mb-5 pb-4 ' >
          <h1 className='mb-2'>OTHER </h1>
          <p>“If you don’t try this app, you won’t
            become the superhero you were meant to be”</p>
        </div>



        <div className="row">
          <OrderCard
            img={Order5}
            title="Moroccan Order"
            content="Small steamed balls of semolina often served with ..."
          />
          <OrderCard
            img={Order6}
            title="Moroccan Order"
            content="Marinade made with herbs, spices, and lemon juice"
          />
          <OrderCard
            img={Order7}
            title="Moroccan Order"
            content="Moroccan meatballs made with ground beef or lamb."
          />
          <OrderCard
            img={Order8}
            title="Moroccan Order"
            content="Stew of meat or vegetables slow-cooked with spices."
          />
        </div>

      </div>

    </div>
  )
}
