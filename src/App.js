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
import ContactItems from "./components/ContactItems";

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

export default function App() {
  return (
    <div className="bg-secondary-200">
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
        <ContactItems />
      </Router>
    </div>
  );
}