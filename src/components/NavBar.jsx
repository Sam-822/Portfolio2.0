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
          <svg
					id="brand-logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            // width="30px"
            height="40px"
            version="1.1"
            // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
						style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimize-Quality', fillRule:'evenodd', clipRule:'evenodd'}}
            viewBox="0 0 1931.65 2923.88"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                id="logo"
                className="fil0 str0"
                d="M865.71 1132.97l0 -200.25 200.24 0 0 200.25 772.36 0c0,0 -100.12,-0 -100.12,-100.12 0,-100.12 100.12,-100.12 100.12,-100.12l-772.36 -858.18 0 286.06c0,0 -0.01,100.12 -100.12,100.12 -100.12,0 -100.12,-86.93 -100.12,-86.93l0 -156.23 -772.37 715.15c0,0 100.12,-0 100.12,100.12 0,100.12 -100.12,100.12 -100.12,100.12l972.61 657.94 0 200.25 -200.24 0 0 -200.25 -772.37 0c0,0 100.12,0 100.12,100.12 0,100.12 -100.12,100.12 -100.12,100.12l772.37 858.18 0 -286.06c0,0 -0.01,-100.12 100.12,-100.12 100.12,0 100.12,100.12 100.12,100.12l0 143.03 772.36 -715.15c0,0 -100.12,0 -100.12,-100.12 0,-100.12 100.12,-100.12 100.12,-100.12l-972.6 -657.94z"
              />
            </g>
          </svg>
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
