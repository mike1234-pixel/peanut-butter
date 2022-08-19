import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer__content">
              <p>2022 Peanut Butter.</p>
              <p>&copy; Faranak Gholampour.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
