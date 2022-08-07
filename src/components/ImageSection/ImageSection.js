import { Container, Row, Col } from "react-bootstrap";
import "./ImageSection.scss";

const ImageSection = ({ imgPosition, image, title, text }) => {
  const imgOrder = imgPosition === "left" ? 0 : 1;
  const textOrder = imgPosition === "left" ? 1 : 0;
  const offsetLeft = imgPosition === "left" ? 1 : 0;
  const offsetRight = imgPosition === "left" ? 0 : 1;

  return (
    <section className="image-section">
      <Container>
        <Row>
          <Col
            md={{ span: 5, offset: offsetLeft, order: textOrder }}
            order={imgPosition === "left" ? 1 : 0}
          >
            <div className="image-section__text">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </Col>
          <Col
            md={{ span: 6, offset: offsetRight, order: imgOrder }}
            order={imgPosition === "left" ? 0 : 1}
          >
            <img src={image} alt="golden retriever" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageSection;
