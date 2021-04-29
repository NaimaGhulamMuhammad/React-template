import React from 'react'
import BannerLeft from '../components/BannerLeft'
import FooterBar from '../components/FooterBar'
import Navbar from '../components/Navbar'
import Pricing from "../sections/Pricing"
import ServiesSection from "../sections/ServicesSection"
function Services() {
    return (
        <>
             <div className="wraper">
            <Navbar />
            <BannerLeft heading="Services"/>
            <ServiesSection/>
            <Pricing />
            </div>
            <FooterBar />
        </>
    )
}

export default Services
