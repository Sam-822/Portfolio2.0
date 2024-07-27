import React from "react";
import resume from "../assets/Abdul Samad Ansari Mk5.pdf";

const Contacts = () => {
  return (
    <div className="mb-5 ignore-nav text-white">
      <div
        className="container my-3"
        style={{ height: "calc(fit-content + 100px)" }}
      >
        <p className="fs-1 text-crimson autoShowText">Contact Me:</p>
        <p className="fs-4 autoShowText">Find my contact details below</p>
        <div className="autoShowText">
          <div className="contact-item generic-desc mb-1">
            <i className="bi bi-envelope-at-fill fs-3 me-2"></i>
            Email: ansamad1028@gmail.com
          </div>
          <div className="contact-item generic-desc mb-1">
            <i className="bi bi-linkedin fs-3 me-2"></i>
            LinkedIn:&nbsp;
            <a
              href="https://www.linkedin.com/in/abdulsamad102/"
              target="_blank"
              rel="noopener noreferrer"
              className="td-none"
            >
              linkedin.com/in/abdulsamad102/
            </a>
          </div>
          <div className="contact-item generic-desc mb-1">
            <i className="bi bi-github fs-3 me-2"></i>
            Github:&nbsp;
            <a
              href="https://github.com/Sam-822"
              target="_blank"
              rel="noopener noreferrer"
              className="td-none"
            >
              github.com/Sam-822
            </a>
          </div>
          <div className="contact-item generic-desc mb-1">
            <i className="bi bi-file-earmark-arrow-down-fill fs-3 me-2"></i>
            Resume:&nbsp;
            <a
              href={resume}
              className="td-none fs-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
