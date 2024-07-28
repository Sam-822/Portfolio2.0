import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import resume from "../assets/Abdul Samad Ansari Mk5.pdf";
import Button from "react-bootstrap/Button";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="footer-container glass">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "inherit", width: "100%" }}
      >
        <Row style={{ width: "100%" }}>
          <Col xs={1} id="footer-logo">
            <Logo />
          </Col>
          <Col xs={5} className="d-flex align-items-center">
            <div id="footer-name" className="fs-2 text-crimson">
              Abdul Samad Ansari
            </div>
          </Col>
          <Col className="text-white">
            <Row>
              <Col className="fs-4 text-crimson"> Projects:</Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="https://bookstore-sooty-beta.vercel.app/"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  Books Palace
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="https://shopbuddy-abdul-samad-ansaris-projects.vercel.app/"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  ShopBuddy
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="https://foodbuddyabdul.netlify.app/"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  FoodBuddy
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="text-white">
            <Row>
              <Col className="fs-4 text-crimson"> Links:</Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="mailto:ansamad1028@gmail.com"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  <i className="bi bi-envelope-at-fill fs-5 me-1"></i>Email{" "}
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="https://www.linkedin.com/in/abdulsamad102/"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  <i className="bi bi-linkedin fs-5 me-1"></i>Linkedin{" "}
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href="https://github.com/Sam-822"
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  <i className="bi bi-github fs-5 me-1"></i>Github
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="fs-5 footer-links">
                {" "}
                <a
                  href={resume}
                  className=" text-decoration-none text-white"
                  target="_blank"
                >
                  {" "}
                  <i className="bi bi-file-earmark-arrow-down-fill fs-5 me-1"></i>
                  Resume
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button
          variant="light"
          href="https://github.com/Sam-822/Portfolio2.0"
          id="footer-button"
          target="_blank"
        >
          <i className="bi bi-github fs-5 me-2 my-0"></i>
          Source
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
