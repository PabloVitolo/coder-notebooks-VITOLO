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
      <nav>
          <Link to="/">
          <h2>CoderNotebooks<i><GrPersonalComputer/></i></h2>
          </Link>
          <ul>
              {categories.map((category) => (
                  <Link to={category.path} key={category.id}>
                      {category.name}
                  </Link>
              ))}
          </ul>
          <CartWidget />
      </nav>
  );
};



export default Navbar;
