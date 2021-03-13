import React from "react"
import SectionHeader from "../../components/SectionHeader"
import {Row,Col} from "react-bootstrap"

const AboutUs = () => {
 const content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
return(
  <div className="container-fluid">
    <Row>
      <Col>    
        <SectionHeader title1="About" title2="Us" content={content}/>
      </Col>
    </Row>
  </div>
)
}

export default AboutUs