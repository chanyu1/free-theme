import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import classes from './Header.module.css';

function Header() {
  return (
    <nav>
      <div className={classes.navbar}>
        <Link to="/">
          <h1>KOU</h1>
        </Link>
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
          <FontAwesomeIcon icon={faFacebookSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </li>
      </ul>

      <Link to="#" className="navbar__toggleBtn">
        <i className="fas fa-bars"></i>
      </Link>
    </nav>
  );
}

export default Header;
