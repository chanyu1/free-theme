import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">KOU</Link>
      </div>

      <ul className="navbar__menu">
        <li>
          <Link to="/photo">Photo</Link>
        </li>
        <li>
          <Link to="#">Video</Link>
        </li>
      </ul>

      <ul className="navbar__icons">
        <li>
          <i className="twitter">t</i>
        </li>
        <li>
          <i className="facebook">f</i>
        </li>
      </ul>

      <Link to="#" className="navbar__toggleBtn">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
}

export default Header;
