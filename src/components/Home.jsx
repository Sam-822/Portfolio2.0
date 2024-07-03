import React from "react";
import headerImg from "../assets/header_img.png";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div className="ignore-nav mt-5">
      <div className="container my-3 ">
        <Container id='home-main' fluid className="md d-flex justify-content-between" >
          <div className="home-text">
            <p id='react-dev' className="fs-1 text-crimson"></p>
            <p id='generic-desc' className="my-5 fs-5" style={{ width: "50vw" }}>
              I am <span className="text-crimson">Abdul Samad Ansari</span>, a passionate frontend developer with
              expertise in HTML, CSS, JavaScript, ReactJS, and Bootstrap. My extensive
              project experience, as described in the projects section, has
              honed my problem-solving skills and equipped me with the ability
              to create dynamic, responsive web applications. Additionally, my
              backend knowledge in technologies like NodeJS and ExpressJS
              complements my frontend skills, allowing me to contribute to
              full-stack development projects effectively.
            </p>
          </div>
          <div className="home-svg">
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
							style={{width:'100%'}}
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
