import React from "react";
import { Link } from "react-router-dom";
export default function HomeCard(props) {
  var cardButtonStyle = {
    background: "#982727",
  };
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
      <div className="card shadow-sm boder" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" style={{height:'15em'}} alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bold text-center">{props.title}</h5>
          <p className="card-text d-grid "> {props.content} <br/> <br/> <span className="text-danger text-center w-100 fs-4 fw-bold">{props.prix}MAD</span> </p>
          <Link to='/explore/products'>
          <button className="cardBtn position-relative btn text-light w-100 h-100" style={cardButtonStyle} >
            See More
            <i className="position-absolute fa fa-angle-right  px-4 opacity-75" style={{top:'50%',translate:'0 -42%',transition:'1s ease'}}></i>
          </button> 
          </Link>
        </div>
      </div>
    </div>
  );
}
