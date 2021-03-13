import { Row, Col } from "react-bootstrap";
import SectionHeader from "../../components/SectionHeader";

const OurTeam = () => {
  const content =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <SectionHeader title1="Our" title2="Team" content={content} />
        </Col>
      </Row>
    </div>
  );
};

export default OurTeam;
