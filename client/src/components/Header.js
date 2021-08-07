import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import * as actions from '../_actions';

function Header({ auth, logoutUser }) {
  const loginContent = () => {
    return [
      <li key="logout">
        <a
          style={{ fontFamily: 'Lexend, sans-serif' }}
          onClick={() => logoutUser()}
        >
          Logout
        </a>
      </li>,
      <li key="github">
        <a href="https://github.com/chanyu1" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>,
    ];
  };

  const logoutContent = () => {
    return [
      <li key="login">
        <Link style={{ fontFamily: 'Lexend, sans-serif' }} to="/login">
          Login
        </Link>
      </li>,
      <li key="signup">
        <Link style={{ fontFamily: 'Lexend, sans-serif' }} to="/signup">
          Sign up
        </Link>
      </li>,
    ];
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          style={{
            fontFamily: 'Lexend, sans-serif',
            fontSize: '36px',
            margin: '0 16px',
          }}
          to={auth && auth.isAuth ? '/photos' : '/'}
          className="left brand-logo"
        >
          KOU
        </Link>
        <ul style={{ margin: '0 16px' }} className="right">
          {auth && auth.isAuth ? loginContent() : logoutContent()}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(Header));
