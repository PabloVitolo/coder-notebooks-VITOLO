import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { GrPersonalComputer } from "react-icons/gr";
import "./styles.css";
import { useState } from "react";

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div>
        <span className="nav-logo">
          <Link to="/">coderNotebooks</Link>
        </span>
        <GrPersonalComputer size={30} color="white" />
      </div>
      <div className={`nav-items ${isOpen ? "open" : ""}`.trim()}>
        {categories.map((category) => (
          <Link to={category.path} key={category.id} className="nav-item">
            {category.name}
          </Link>
        ))}
      </div>
      <div className="cart cart-widget-text">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
      <div className="nav-mobile">
        <div className="cart-mobile className=cart-widget-text">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
        <div
          className={`nav-toggle ${isOpen ? "open" : ""}`.trim()}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
