import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

import * as actions from '../_actions';

function Header({ logoutUser, history }) {
  // <FontAwesomeIcon icon={faFacebookSquare} />
  // <FontAwesomeIcon icon={faInstagramSquare} />
  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          style={{ fontFamily: 'Lexend, sans-serif', fontSize: '52px' }}
          to="/photos"
          className="left brand-logo"
        >
          KOU
        </Link>
        <ul className="right">
          <li>
            <a onClick={() => logoutUser(history)}>logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// function mapStateToProps({ auth }) {
// console.log('auth', auth);
// return { auth };
// }

export default connect(null, actions)(withRouter(Header));
