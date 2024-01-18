import React from "react";
import "../../css/orderOnline.css";
import { Link } from "react-router-dom";

export default function OrderCard(props) {
 let cardButtonStyle = {
    background: "#982727",
  };
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3  " >
      <div className="card shadow-sm " style={{ width: "14rem" }}>
        <img src={props.img} className="card-img-top" style={{height:'15em'}} alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bold text-center">{props.title}</h5>
          <p className="card-text d-grid "> {props.content} <br/> <br/>  </p>
          <Link className="cardBtn position-relative btn text-light w-100 " style={cardButtonStyle} >
           ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}