import React, { useState } from "react";
import CartWidget from "../CartWidget";
import { GrPersonalComputer } from 'react-icons/gr';
import "./styles.css";

const menuItems = [
  {
    id: "1",
    label: "GAMER",
  },
  {
    id: "2",
    label: "OFFICE",
  },
  {
    id: "3",
    label: "SCHOOL",
  },
];
// navbar contractil usando ternarios
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <h1 className="nav-logo">CoderNotebooks<i className="logo"><GrPersonalComputer /></i></h1>
      <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}> 
        {menuItems.map((item) => (
          <a href="/" className="nav-item" key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
      <div className="cart">
        <CartWidget />
      </div>
      <div className="nav-mobile">
        <div className="cart-mobile">
          <CartWidget />
        </div>
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`.trim()}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
