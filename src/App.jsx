import React from "react";
import "./index.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Addmission from "./pages/Addmission";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";

function App() {
  

  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addmission" element={<Addmission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>  
  )
  
}

export default App;
