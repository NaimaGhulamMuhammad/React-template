import React from "react";

const OtherServiceCard = (props) => {
    return (
        <div className="item service-card">
            <div className="service_icon">
                <i className={props.icon}> </i>
            </div>
            <div className="service_detail">
                <h5>
                    <a href="service-detail.html" >{props.title}</a>
                </h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}
export default OtherServiceCard