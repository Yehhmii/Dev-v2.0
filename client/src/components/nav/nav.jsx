import React, { useState } from 'react';
import './nav.css';
import logo from '../../images/logo.png';
import downGif from '../../images/down.gif'
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ScrollLink = Scroll.Link;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="upperNavContainer">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dev logo" />
          </Link>
        </div>
        <div className="menuIcon" onClick={toggleMenu}>
          <img src={downGif} alt="" />
        </div>
        <ul className={`navLists ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li>
            <ScrollLink to="target" smooth={true}>
              <span>Skills</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="targetContact" smooth={true}>
              <span>Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
