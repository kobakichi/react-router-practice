import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Create } from "../Create/Create";
import { Contact } from "../Contact/Contact";
import { Navbar } from "../Navbar/Navbar";

export const RouteManager: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      ;
    </Router>
  );
};
