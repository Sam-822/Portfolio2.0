import React from "react";
import headerImg from "../assets/header_img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div className="container my-5 d-flex justify-content-between">
      <Container fluid="md">
        <Row>
          <Col xs={8}>
            <p className="fs-1 text-crimson">About</p>
            <p className="fs-5">
              I'm Abdul Samad Ansari, a passionate MERN stack developer with a
              flairfor building dynamic and interactive web applications. My
              expertiselies in the following technologies:
            </p>
            <ul className="fs-5">
              <li>
                <span>
                  React.js: I create responsive anduser-friendly interfaces
                  using React, ensuring seamless user experiences.
                </span>
              </li>
              <li>
                <span>
                  MongoDB: I handle data storage and retrieval
                  efficiently,leveraging MongoDB for robust backend development.
                </span>
              </li>
              <li>
                <span>
                  Express.js: I build RESTful APIs and manage server-side logic
                  with Express.
                </span>
              </li>
              <li>
                <span>
                  Node.js: I'm proficient in server-side scripting using
                  Node.js, ensuring smooth communication between the client and
                  server.
                </span>
              </li>
              <li>
                <span>
                  Python: I've explored Python for machine learning, natural
                  language processing, and data analysis.
                </span>
              </li>
              <li>
                <span>
                  Blockchain: I've implemented secure blockchain networks for
                  projects, ensuring data integrity and immutability.
                </span>
              </li>
              <li>
                <span>
                  Flask: I've used Flask to create user-friendly web
                  applications, streamlining system access and management.
                </span>
              </li>
            </ul>
            <p className="fs-5">
              Whether it's crafting pixel-perfect UI components or optimizing
              backend performance, I'm committed to delivering clean, code that
              adheres to industry standards. Let's collaborate and bring your
              ideas to life! Feel free to connect with me on LinkedIn or explore
              my projects on GitHub. You can also reach out via email at
              ansamad1028@gmail.com. Looking forward to creating amazing web
              experiences together!
            </p>
          </Col>
          <Col className="d-flex">
            <svg
              width={"100%"}
              height={"100%"}
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop
                    id="stop1"
                    stopColor="rgba(65, 90, 119, 1)"
                    offset="0%"
                  ></stop>
                  <stop
                    id="stop2"
                    stopColor="rgba(224, 225, 221, 1)"
                    offset="100%"
                  ></stop>
                </linearGradient>
                {/* Define clip path */}
                <clipPath id="clip-path">
                  <path
                    d="M17.5,-30.4C23.5,-26.8,29.9,-23.9,33.7,-18.9C37.4,-14,38.6,-7,39.2,0.4C39.9,7.7,40,15.5,36,20C32.1,24.6,23.9,26,17.2,30.2C10.5,34.5,5.3,41.5,-0.6,42.6C-6.5,43.7,-13.1,38.9,-17.3,33.2C-21.6,27.6,-23.5,21.1,-26.8,15.5C-30.2,9.8,-34.8,4.9,-37.3,-1.4C-39.8,-7.8,-40.1,-15.5,-36.7,-21.2C-33.4,-26.8,-26.4,-30.2,-19.7,-33.5C-13,-36.7,-6.5,-39.7,-0.4,-39C5.7,-38.3,11.4,-34,17.5,-30.4Z"
                    transform="translate(50 50)"
                  />
                </clipPath>
              </defs>

              {/* Blob shape */}
              <path
                fill="url(#sw-gradient)"
                d="M17.5,-30.4C23.5,-26.8,29.9,-23.9,33.7,-18.9C37.4,-14,38.6,-7,39.2,0.4C39.9,7.7,40,15.5,36,20C32.1,24.6,23.9,26,17.2,30.2C10.5,34.5,5.3,41.5,-0.6,42.6C-6.5,43.7,-13.1,38.9,-17.3,33.2C-21.6,27.6,-23.5,21.1,-26.8,15.5C-30.2,9.8,-34.8,4.9,-37.3,-1.4C-39.8,-7.8,-40.1,-15.5,-36.7,-21.2C-33.4,-26.8,-26.4,-30.2,-19.7,-33.5C-13,-36.7,-6.5,-39.7,-0.4,-39C5.7,-38.3,11.4,-34,17.5,-30.4Z"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              />

              {/* Image */}
              <image
                href={headerImg}
                x="10"
                y="10"
                width="75"
                height="75"
                clipPath="url(#clip-path)"
              />
            </svg>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
