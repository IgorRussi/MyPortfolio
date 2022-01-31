import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavComp = () => {
  return (
    <Container expand="sm" bg="light">
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
              className="justify-content-end"
            >
              <Nav.Link style={{ fontSize: 13 }} href="#services">
                Services
              </Nav.Link>
              <Nav.Link style={{ fontSize: 13 }} href="#about">
                About
              </Nav.Link>
              <Nav.Link style={{ fontSize: 13 }} href="#Skills">
                Skills
              </Nav.Link>
              <Nav.Link style={{ fontSize: 13 }} href="#work">
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavComp;
