// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import './App.css';
import Syllabus from './Syllabus';
import C_Sheet from './C_Sheet';
import DSA_Sheet from './DSA_Sheet';

const App = () => (
  <Router>
    <div>
      {/* Navbar */}
      <div className="navbar">
        {/* Logo */}
        <a href="/"><div className="logo">BlacK-PearL</div></a>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/c_sheet">C Sheet</Link>
          <Link to="/DSA_sheet">DSA Sheet</Link>
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/c_sheet" element={<C_Sheet />} />
        <Route path="/DSA_sheet" element={<DSA_Sheet />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
      <marquee className="mrq">This website is not completed yet, The responsive and updated version will be released soon.Thanks for visiting our page.Thank You !!</marquee>
    </div>
  </Router>
);

export default App;
