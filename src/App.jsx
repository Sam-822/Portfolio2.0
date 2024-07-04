import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(TextPlugin, ScrollTrigger, MotionPathPlugin);

function App() {
  useGSAP(() => {
    gsap.to("#brand-logo", { rotate: 720, x: 200, duration: 1 });
    gsap.to("#react-dev", {
      duration: 0.8,
      text: "ReactJs Developer",
      ease: "none",
    });
  });
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
