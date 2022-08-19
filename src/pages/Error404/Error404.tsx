import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Error404.scss";

const Error404: FC = () => {
  return (
    <section className="error-page">
      <Container>
        <Row>
          <Col>
            <p>404 not found</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Error404;
