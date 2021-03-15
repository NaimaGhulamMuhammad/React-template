import React from "react";

import img1 from "../img/team-member-pic.jpg";
import img2 from "../img/team-member-pic2.jpg";
import img3 from "../img/team-member-pic4.jpg";
import img4 from "../img/team-member-pic3.jpg";

/////// PORTFOLIO SECTION IMAGES ///////
import portfolio_a from "../img/portfolio/thumbnail/project_1.jpg";
import portfolio_b from "../img/portfolio/thumbnail/project_2.jpg";
import portfolio_c from "../img/portfolio/thumbnail/project_3.jpg";
import portfolio_d from "../img/portfolio/thumbnail/project_4.jpg";
import portfolio_e from "../img/portfolio/thumbnail/project_5.jpg";
import portfolio_f from "../img/portfolio/thumbnail/project_6.jpg";

import portfolio_A from "../img/portfolio/large/project_1.jpg";
import portfolio_B from "../img/portfolio/large/project_2.jpg";
import portfolio_C from "../img/portfolio/large/project_3.jpg";
import portfolio_D from "../img/portfolio/large/project_4.jpg";
import portfolio_E from "../img/portfolio/large/project_5.jpg";
import portfolio_F from "../img/portfolio/large/project_6.jpg";

const Sdata = [
  {
    pic: img1,
    name: "Alec Thompson",
    position: "Developer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img4,
    name: "Tania Andrew",
    position: "Designer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img3,
    name: "Christian Mike",
    position: "Developer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img2,
    name: "Rebecca Stormville",
    position: "Designer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const Heading_data = [
  {
    title1: "Our ",
    title2: "Team",
    headingcontent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    title1: "Portfolio ",
    headingcontent:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

/////// PORTFOLIO SECTION DETAILS///////
const Portfolio_data = [
  {
    content: "Photographary",
    img_thumbnail: portfolio_a,
    img_large: portfolio_A
  },
  {
    content: "Ecommerce",
    img_thumbnail: portfolio_b,
    img_large: portfolio_B
  },
  {
    content: "Education",
    img_thumbnail: portfolio_c,
    img_large: portfolio_C
  },
  {
    content: "Real Estate",
    img_thumbnail: portfolio_d,
    img_large: portfolio_D
  },
  {
    content: "Bar & Restaurant",
    img_thumbnail: portfolio_e,
    img_large: portfolio_E
  },
  {
    content: "Saloon & Spa",
    img_thumbnail: portfolio_f,
    img_large: portfolio_F
  }
];
export { Sdata, Heading_data, Portfolio_data };
