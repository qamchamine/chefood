import React from "react";
import "../../css/home.css";
import ButtonMain from "../small_components/ButtonMain";
/* import $ from "jquery"; */
import HomeBg from "../../images/homeBG.png";

import { Link } from "react-router-dom";

import HomeCardFullSection from "../small_components/HomeCardFullSection";

import HomeCard from "../small_components/HomeCard";
export default function Home() {
    return (
        <div className="container w-100 home " >
            <div  className="homeContent d-flex w-100  align-items-center">
                <div  className="d-flex col-12 col-sm-12 col-md-6 flex-column align-items-start">
                    <h1 > 
                        <span >Taste the difference </span> <br />
                        <span>with us</span>
                    </h1>
                    <p className="my-3 mt-1 py-2" style={{ color: "#982727" }}>
                        "Taste the difference with our chef-inspired cuisine
                        that combines bold flavors and fresh ingredients."
                    </p>
                    <div className="homeMainButtons d-flex  justify-content-between ">

                        <Link to='/explore/products'> 
                        <ButtonMain btnContent="View menu" filled="1" />
                        </Link>
                        <Link to='/services/reservation'> 
                        <ButtonMain btnContent="Book now" filled="0" />
                        </Link>
                    </div>
                </div>
                <img src={HomeBg} className="homeBG col-12 col-sm-12 col-md-6" alt="" />

            </div>







<HomeCardFullSection sectionId={'section1'} />

{/* -------------------------/////////////////////////////////--------------------------------- */}
<HomeCardFullSection sectionId={'section2'} />




















       
        </div>
    );
}
