import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { GrPersonalComputer } from 'react-icons/gr';
import "./styles.css";

const categories = [
  {
      id: 1,
      path: '/',
      name: 'Inicio',
  },
  {
      id: 2,
      path: '/category/gamer',
      name: 'Gamer',
  },
  {
      id: 3,
      path: '/category/office',
      name: 'Office',
  },
  {
      id: 4,
      path: '/category/school',
      name: 'School',
  },
];


const Navbar = () => {
  return (
      <nav>
          <h2>CoderNotebooks<i><GrPersonalComputer/></i></h2>
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
