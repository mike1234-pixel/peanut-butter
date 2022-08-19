import { FC } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import retriever1 from "../../assets/image/retriever1.jpg";
import retriever2 from "../../assets/image/retriever2.jpg";
import retriever3 from "../../assets/image/retriever3.jpg";
import "./CarouselSection.scss";

interface CarouselSectionProps {
  title: string | null;
  text: string | null;
}

const CarouselSection: FC<CarouselSectionProps> = (props) => {
  const { title, text } = props;

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
            <Carousel fade={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever1}
                  alt="golden retriever"
                />
                <Carousel.Caption>
                  <h3>Obedient</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever2}
                  alt="golden retriever"
                />

                <Carousel.Caption>
                  <h3>Loyal</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={retriever3}
                  alt="golden retriever"
                />
                <Carousel.Caption>
                  <h3>Intelligent</h3>
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
