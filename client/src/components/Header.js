import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

import { logoutUser } from '../_actions/userAction';
import Sidebar from './Sidebar';

const HeaderWrapperDiv = styled.div`
  font-family: Lexend, sans-serif;
`;
const BrandLogoDiv = styled.div`
  font-size: 2em;
`;
const ContentDiv = styled.div`
  margin-right: 18px;
`;

const Header = ({ auth, logoutUser }) => {
  const loginContent = () => {
    return [
      <li key="logout">
        <a onClick={() => logoutUser()}>Log out</a>
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
        <Link to="/login">Log in</Link>
      </li>,
      <li key="signup">
        <Link to="/signup">Sign up</Link>
      </li>,
    ];
  };

  return (
    <HeaderWrapperDiv>
      <nav className="blue-grey">
        <div className="nav-wrapper">
          <Sidebar />
          <Link className="left" to={auth?.isAuth ? '/postcards' : '/'}>
            <BrandLogoDiv>KOU</BrandLogoDiv>
          </Link>
          <ul className="right">
            <ContentDiv>
              {auth?.isAuth ? loginContent() : logoutContent()}
            </ContentDiv>
          </ul>
        </div>
      </nav>
    </HeaderWrapperDiv>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Header));
