import React from "react"
import {Row,Col} from "react-bootstrap"
const SectionHeader = ({title1, title2, content}) => {
return(
  <div className="d-flex flex-column justify-content-center align-items-center" >
    <h2 >{title1} <span class="txt-color">{title2}</span></h2>
        <div class="separator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="heading_content">{content} </div>
  </div>
)
}

export default SectionHeader