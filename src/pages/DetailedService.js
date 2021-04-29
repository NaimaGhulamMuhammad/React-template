import React from "react"
import ServicesContent from "../sections/ServicesContent";
import ServicesCounter from "../sections/ServicesCounter";
import OtherServices from "../sections/OtherServices";
import Banner from "../components/Banner"
import {SDDATA} from "../Data/Home_Data"
import ServicesFooter from "../sections/ServicesFooter";
import Navbar from "../components/Navbar";

export default function DetailedService({content}) {
  return (
    <>
        <div className="wraper">
        <Navbar />
        <Banner l1="Services" l2="Services Detail"/>
        <ServicesContent content={content}/>
        <ServicesCounter data={SDDATA} cls="display"/>
        <OtherServices />
        </div>
        <ServicesFooter />
    
    </>
  );
}
