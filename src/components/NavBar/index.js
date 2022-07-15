import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { GrPersonalComputer } from "react-icons/gr";
import "./styles.css";

const categories = [
  {
    id: 1,
    path: "/category/gamer",
    name: "Gamer",
  },
  {
    id: 2,
    path: "/category/office",
    name: "Office",
  },
  {
    id: 3,
    path: "/category/school",
    name: "School",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <GrPersonalComputer size={30} color="white" />
        <span className="navbar-logo-text">
          <Link to="/">coderNotebooks</Link>
        </span>
      </div>
      <div className="navbar-categories">
        {categories.map((category) => (
          <Link to={category.path} key={category.id}>
            {category.name}
          </Link>
        ))}
      </div>
      <CartWidget />
    </div>
  );
}


export default Navbar;
