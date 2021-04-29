import React from 'react'
import Banner from "../components/Banner"
import Counter from "../sections/Counter"
import {HCDAta} from "../Data/Home_Data"
import MainPortfolio from '../sections/MainPortfolio'
import Navbar from '../components/Navbar'
import ServicesFooter from '../sections/ServicesFooter'
function Portfolio() {
    return (
        <>
             <div className="wraper">
            <Navbar />
            <Banner heading="Portfolio"/>
            <section id="portfolio" >
                <div className="container">
            <MainPortfolio />
            </div>
            </section>
            <Counter data={HCDAta} cls overlay/>
            </div>
            <ServicesFooter />

        </>
    )
}

export default Portfolio
