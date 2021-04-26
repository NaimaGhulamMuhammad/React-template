import React from "react";
import Sectionheader from "../../reusable/Sectionheader";
import {SectionData,ServiceData} from "../../../../Data/Bizler_Data/CareerDetail_Data";
import OtherServiceCard from "./OtherServiceCard";
const OtherService = () => {
    return (
    <section id="services" className="gray-bg">
        <div className="container">
            <Sectionheader title1={SectionData[0].title1} headingcontent={SectionData[0].headingcontent}/>
            <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                <div className="service-slider owl-one owl-carousel owl-theme">
                    <OtherServiceCard icon={ServiceData[0].icon} title={ServiceData[0].title} content={ServiceData[0].content}/>
                    <OtherServiceCard icon={ServiceData[1].icon} title={ServiceData[1].title} content={ServiceData[1].content}/>
                    <OtherServiceCard icon={ServiceData[2].icon} title={ServiceData[2].title} content={ServiceData[2].content}/>
                    <OtherServiceCard icon={ServiceData[3].icon} title={ServiceData[3].title} content={ServiceData[3].content}/>
                    <OtherServiceCard icon={ServiceData[4].icon} title={ServiceData[4].title} content={ServiceData[4].content}/>
                </div>
            </div>
        </div>
    </section>
    )
};
export default OtherService