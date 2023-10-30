import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className='navbar container'>
      <Link to='/' className='nav__logo'>
        Fitzen
      </Link>
      <div className='menu' onClick={() => setShow(!show)}>
        {show ? (
          <AiFillCloseCircle className='bar' />
        ) : (
          <FaBarsStaggered className='bar' />
        )}
      </div>
      <ul className={show ? "open" : ""}>
        <li>
          <NavLink to='/about' className='nav__link'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/workout' className='nav__link'>
            Workouts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
