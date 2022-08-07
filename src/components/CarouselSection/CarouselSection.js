import { Container, Row, Col, Carousel } from "react-bootstrap";
import retriever1 from "../../assets/image/retriever1.jpg";
import retriever2 from "../../assets/image/retriever2.jpg";
import retriever3 from "../../assets/image/retriever3.jpg";
import "./CarouselSection.scss";

const CarouselSection = ({ title, text }) => {
  return (
    <section className="carousel-section">
      <Container>
        <Row>
          <Col md={5}>
            <div className="carousel-section__text">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 1 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever1}
                  alt="golden retriever"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever2}
                  alt="golden retriever"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever3}
                  alt="golden retriever"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarouselSection;
