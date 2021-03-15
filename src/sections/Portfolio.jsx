import React from "react";
import Sectionheader from "../components/Sectionheader";
import { Heading_data, Portfolio_data } from "../Data/Home_Data";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio" className="index-3">
      <div className="container">
        <Sectionheader
          title1={Heading_data[1].title1}
          headingcontent={Heading_data[1].headingcontent}
        />

        <div className="col-lg-12 col-md-12 col-xs-12 content_sec ">
          <div className="portfolio-sort">
            <ul className="sorting clearfix center-grid">
              <li className="sort-btn active" data-filter="*">
                All
              </li>
              <li className="sort-btn" data-filter=".design">
                Web Design
              </li>
              <li className="sort-btn" data-filter=".development">
                Web Development
              </li>
              <li className="sort-btn" data-filter=".logo">
                Logo Design
              </li>
              <li className="sort-btn" data-filter=".app">
                App Design
              </li>
            </ul>
          </div>
          <div className="row portfolio-gallary">
          {Portfolio_data.map((data)=>{
                         const {content, img_thumbnail,img_large} = data
                         return(
                             <PortfolioCard key={content} content={content} img_thumbnail={img_thumbnail} img_large={img_large}/>
                         )
                     })}
          </div>
        </div>
      </div>
      <div className="overlay"> </div>
    </section>
  );
};

export default Portfolio;
