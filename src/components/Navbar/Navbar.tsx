import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Create">Create</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};
