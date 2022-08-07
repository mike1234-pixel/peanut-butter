import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
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
