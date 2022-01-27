import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';

const SidebarOpenA = styled.a`
  padding: 0 8px;
`;
const SidebarCloseA = styled.a`
  padding-left: 26px;
`;
// const SidebarInfoContainerDiv = styled.div`
//   margin-top: 16px;
// `;
// const SidebarInfoDiv = styled.div`
//   padding-left: 16px;
// `;
const SidebarLinkDiv = styled.div`
  color: #444444;
`;
const EmptyDiv = styled.div`
  padding: 8px;
`;

// const Sidebar = ({ auth }) => {
const Sidebar = () => {
  useEffect(() => {
    let elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }, []);

  // const loginContent = () => {
  //   return (
  //     <div>
  //       <SidebarInfoDiv>
  //         <span className="white-text name">{auth?.name}</span>
  //       </SidebarInfoDiv>
  //       <a href="#email">
  //         <span className="white-text">{auth?.email}</span>
  //       </a>
  //     </div>
  //   );
  // };

  // const logoutContent = () => {
  //   return (
  //     <SidebarInfoContainerDiv>
  //       <a href="/login">
  //         <span className="white-text">Log in here!</span>
  //       </a>
  //     </SidebarInfoContainerDiv>
  //   );
  // };

  return (
    <span>
      <ul id="slide-out" className="sidenav">
        <li>
          <div>
            <SidebarCloseA className="blue-grey sidenav-close">
              <i className="material-icons">menu</i>
            </SidebarCloseA>
          </div>
          {/* <div className="user-view">
            <div className="background">
              <img src="uploads/test02.jpg" />
            </div>
            <a href="#user">
              <img className="circle" src="uploads/test01.jpg" />
            </a>
            {auth?.isAuth ? loginContent() : logoutContent()}
          </div> */}
        </li>
        <EmptyDiv />
        {/* <li>
          <a className="waves-effect" href="/">
            <i className="material-icons">account_circle</i>
            <SidebarLinkDiv>About</SidebarLinkDiv>
          </a>
        </li> */}
        <li>
          <a className="waves-effect" href="/photography">
            <i className="material-icons">photo</i>
            <SidebarLinkDiv>Photography</SidebarLinkDiv>
          </a>
        </li>
        {/* <li>
          <a className="waves-effect" href="/cinematography">
            <i className="material-icons">camera_roll</i>
            <SidebarLinkDiv>Cinematography</SidebarLinkDiv>
          </a>
        </li>
        <li>
          <a className="waves-effect" href="/contact">
            <i className="material-icons">phone</i>
            <SidebarLinkDiv>Contact</SidebarLinkDiv>
          </a>
        </li> */}
        {/* <div className="divider" /> */}
      </ul>
      <SidebarOpenA
        className="sidenav-trigger show-on-large"
        data-target="slide-out"
        href="#"
      >
        <i className="material-icons">menu</i>
      </SidebarOpenA>
    </span>
  );
};

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(mapStateToProps)(Sidebar);
export default Sidebar;
