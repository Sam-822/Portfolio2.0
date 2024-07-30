import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="nav-glass"
      style={{ boxShadow: "0px 5px 20px black" }}
			fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
				<img src="/logo.svg" height={40} width={40} alt="" />
        </Navbar.Brand>
        <Navbar.Brand id="brand-name" href="/" className="text-white fs-3 fw-semibold" style={{marginLeft:'30px'}}>Abdul Samad Ansari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#projects">Projects</Nav.Link>
            <Nav.Link className="text-white" href="#about">About</Nav.Link>
            <Nav.Link className="text-white" href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
