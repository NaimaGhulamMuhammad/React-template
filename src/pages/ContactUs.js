import React from 'react'
import Banner from "../components/Banner";
import Navbar from '../components/Navbar';
import Contact from '../sections/Contact';
import Map from '../sections/Map';
import ServicesFooter from '../sections/ServicesFooter';
function ContactUs() {
    return (
        <>
        <div className="wraper">
        <Navbar />
        <Banner heading = "Contact Us" l1 ="contactUs"/>
        <Contact/>
        <Map />
      </div>
      <ServicesFooter />
     
    
       </>
    )
}

export default ContactUs
