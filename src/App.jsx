import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main style={{paddingTop:'80px'}}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contacts />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        </main>
				<footer>
					<Footer />
				</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
