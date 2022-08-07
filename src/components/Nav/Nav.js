import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { FaPaw } from "react-icons/fa";
import "./Nav.scss";

const Navigation = () => {
  const [activeClass, setActiveClass] = useState("");

  const handleClick = () => {
    activeClass === "" ? setActiveClass("is-active") : setActiveClass("");
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="nav">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            Pean
            <FaPaw className="paw" />t B<FaPaw className="paw" />
            tter
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          {/* add is-active class to toggle the hamburger */}
          <span
            onClick={handleClick}
            className={`hamburger hamburger--elastic  ${activeClass}`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LanguageSelect />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
