import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      style={{ boxShadow: "0px 5px 20px #4a525b" }}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <img
            id="brand-logo"
            src="/logo.svg"
            width="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> */}
          <svg
					id="brand-logo"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            // width="30px"
            height="40px"
            version="1.1"
            // style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
						style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimize-Quality', fillRule:'evenodd', clipRule:'evenodd', marginLeft:'-200px'}}
            viewBox="0 0 1931.65 2923.88"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:xodm="http://www.corel.com/coreldraw/odm/2003"
          >
            <g id="Layer_x0020_1">
              {/* <path
                id="circle"
                class="st1"
                d="M490.1,280.649c0,44.459-36.041,80.5-80.5,80.5s-80.5-36.041-80.5-80.5s36.041-80.5,80.5-80.5
  S490.1,236.19,490.1,280.649z"
              /> */}
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                id="logo"
                className="fil0 str0"
                d="M865.71 1132.97l0 -200.25 200.24 0 0 200.25 772.36 0c0,0 -100.12,-0 -100.12,-100.12 0,-100.12 100.12,-100.12 100.12,-100.12l-772.36 -858.18 0 286.06c0,0 -0.01,100.12 -100.12,100.12 -100.12,0 -100.12,-86.93 -100.12,-86.93l0 -156.23 -772.37 715.15c0,0 100.12,-0 100.12,100.12 0,100.12 -100.12,100.12 -100.12,100.12l972.61 657.94 0 200.25 -200.24 0 0 -200.25 -772.37 0c0,0 100.12,0 100.12,100.12 0,100.12 -100.12,100.12 -100.12,100.12l772.37 858.18 0 -286.06c0,0 -0.01,-100.12 100.12,-100.12 100.12,0 100.12,100.12 100.12,100.12l0 143.03 772.36 -715.15c0,0 -100.12,0 -100.12,-100.12 0,-100.12 100.12,-100.12 100.12,-100.12l-972.6 -657.94z"
              />
            </g>
          </svg>
        </Navbar.Brand>
        <Navbar.Brand id="brand-name" href="/" style={{marginLeft:'30px'}}>Abdul Samad Ansari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
