import React from 'react'
import BannerLeft from '../components/BannerLeft'
import AboutContent from "../components/AboutContent"
import AboutDetail from "../sections/AboutDetail"
import AboutQualities from "../sections/AboutQualities"
import OurTeam from "../sections/OurTeam"
import Counter from "../components/Counter"
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import FooterBar from '../components/FooterBar'

function About() {
    return (
        <>
        <div className="v2-inner">
        <Topbar />
        <Navbar />
        <BannerLeft heading="About Us"/>
        <AboutContent />
        <AboutQualities />
        <AboutDetail />
        <section id="counter" className="counter-inner">
        <Counter/>
        <div className="overlay"></div>
        </section>
        <OurTeam/>
        </div>
        <FooterBar />
        </>
    )
}

export default About
