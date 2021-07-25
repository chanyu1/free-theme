import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Header(props) {
  const logoutHandler = () => {
    axios.get('/api/users/logout').then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        props.history.push('/');
      } else {
        alert('Failed to logout.');
      }
    });
  };

  //   <li>
  //   <Link to="/photo">Photo</Link>
  // </li>
  // <li>
  //   <Link to="#">Video</Link>
  // </li>
  // </ul>

  // <ul className="navbar__icons">
  // <li>
  //   <FontAwesomeIcon icon={faFacebookSquare} />
  // </li>
  // <li>
  //   <FontAwesomeIcon icon={faInstagramSquare} />
  // </li>

  return (
    <nav>
      <div className="nav-wrapper">
        {/* <div className={classes.navbar}> */}
        <Link
          style={{ fontFamily: 'Lexend, sans-serif', fontSize: '50px' }}
          to="/dashboard"
          className="left brand-logo"
        >
          KOU
        </Link>
        <ul className="right">
          <li key="1">Photo</li>
          <li key="2" style={{ margin: '0 10px' }}>
            Credits:
            {/* {this.props.auth.credits} */}
          </li>
          <li key="3">
            <a onClick={logoutHandler}>logout</a>
            {/* <a href="/api/users/logout"></a> */}
          </li>
        </ul>
      </div>
      {/* <Link to="#" className="navbar__toggleBtn">
          <i className="fas fa-bars"></i>
        </Link> */}
    </nav>
  );
}

function mapStateToProps({ auth }) {
  console.log('auth', auth);
  return { auth };
}

export default connect(mapStateToProps)(withRouter(Header));
