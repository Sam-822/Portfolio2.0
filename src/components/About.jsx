import React from "react";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <div className="ignore-nav">
      <div
        id="about-container"
        className="container my-3 d-flex justify-content-between text-white"
      >
        <Container fluid="md">
          <p id="about-box" className="fs-1 text-crimson autoShowText">
            About
          </p>
          <p className="autoShowText generic-desc">
            I'm Abdul Samad Ansari, a passionate MERN stack developer with a
            flair for building dynamic and interactive web applications. My
            expertiselies in the following technologies:
          </p>
          <ul className="autoShowText generic-desc">
            <li>
                React.js: I create responsive anduser-friendly interfaces using
                React, ensuring seamless user experiences.
            </li>
            <li>
                MongoDB: I handle data storage and retrieval
                efficiently,leveraging MongoDB for robust backend development.
            </li>
            <li>
                Express.js: I build RESTful APIs and manage server-side logic
                with Express.
            </li>
            <li>
                Node.js: I'm proficient in server-side scripting using Node.js,
                ensuring smooth communication between the client and server.
            </li>
            <li>
                Python: I've explored Python for machine learning, natural
                language processing, and data analysis.
            </li>
            <li>
                Blockchain: I've implemented secure blockchain networks for
                projects, ensuring data integrity and immutability.
            </li>
            <li>
                Flask: I've used Flask to create user-friendly web applications,
                streamlining system access and management.
            </li>
          </ul>
          <p className="autoShowText generic-desc">
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
