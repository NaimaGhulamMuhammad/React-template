import React from 'react'
import Counter from "../sections/Counter"
import {HCDAta} from "../Data/Home_Data"
import FaqDetail from "../sections/FaqDetail"
import Banner from "../components/Banner"
import ServicesFooter from '../sections/ServicesFooter'
import Navbar from '../components/Navbar'
function Faqs() {
    return (
        <>
            <div className="wraper">
            <Navbar />
            <Banner heading="Faqs"/>
            <FaqDetail/>
            <Counter   data={HCDAta} cls="counter-inner" overlay/>
            </div>
            <ServicesFooter />
        </>
    )
}

export default Faqs
