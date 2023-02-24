import React from "react";
import "../src/css/index.css";
//import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Services from "./views/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-primary-bg">
      <Navbar />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}