import React from 'react';
import ReactDOM from 'react-dom/client';
import Reviews from '../small_components/Reviews';
import HowCan from '../small_components/faq';
import DivSpacing from '../small_components/div-space'
import LocationAbout from '../small_components/loctaion'
import ContactUs from '../small_components/Contactus'


const About = () => {
    return (
        <>
            <ContactUs/>
            <DivSpacing/>
            <LocationAbout/>
            <DivSpacing/>
            <Reviews/>
            <DivSpacing/>
            <HowCan/>
        </>
    );
}

export default About;