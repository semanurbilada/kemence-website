import React from "react";
import "../src/css/index.css";

import { 
  Route, 
  Routes, 
  BrowserRouter as Router 
} from "react-router-dom";

import Home from "./views/Home";
import Services from "./views/Services";
import About from "./views/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-primary-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Footer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function Main() {
  return(
    <>
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}