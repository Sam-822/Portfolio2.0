import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div className="ignore-nav">
      <div
        id="about-container"
        className="container my-3 d-flex justify-content-between"
      >
        <Container fluid="md">
          <p id="about-box" className="fs-1 text-crimson autoShowText">
            About
          </p>
          <p id="generic-desc" className="fs-5 autoShowText">
            I'm Abdul Samad Ansari, a passionate MERN stack developer with a
            flair for building dynamic and interactive web applications. My
            expertiselies in the following technologies:
          </p>
          <ul id="generic-desc" className="fs-5 autoShowText">
            <li>
              <span id="generic-desc">
                React.js: I create responsive anduser-friendly interfaces using
                React, ensuring seamless user experiences.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                MongoDB: I handle data storage and retrieval
                efficiently,leveraging MongoDB for robust backend development.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                Express.js: I build RESTful APIs and manage server-side logic
                with Express.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                Node.js: I'm proficient in server-side scripting using Node.js,
                ensuring smooth communication between the client and server.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                Python: I've explored Python for machine learning, natural
                language processing, and data analysis.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                Blockchain: I've implemented secure blockchain networks for
                projects, ensuring data integrity and immutability.
              </span>
            </li>
            <li>
              <span id="generic-desc">
                Flask: I've used Flask to create user-friendly web applications,
                streamlining system access and management.
              </span>
            </li>
          </ul>
          <p id="generic-desc" className="fs-5 autoShowText">
            Whether it's crafting pixel-perfect UI components or optimizing
            backend performance, I'm committed to delivering clean, code that
            adheres to industry standards. Let's collaborate and bring your
            ideas to life! Feel free to connect with me on LinkedIn or explore
            my projects on GitHub. You can also reach out via email at{" "}
            <span className="text-crimson"> ansamad1028@gmail.com</span>.
            Looking forward to creating amazing web experiences together!
          </p>
        </Container>
      </div>
    </div>
  );
};

export default About;
