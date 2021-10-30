import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';

const SidebarOpenA = styled.a`
  padding: 0 8px;
`;
const SidebarCloseA = styled.a`
  padding-left: 26px;
`;

const Sidebar = ({ user }) => {
  useEffect(() => {
    let elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }, []);

  return (
    <span>
      <ul id="slide-out" className="sidenav">
        <li></li>

        <li>
          <div>
            <SidebarCloseA className="blue-grey sidenav-close">
              <i className="material-icons">menu</i>
            </SidebarCloseA>
          </div>
          <div className="user-view">
            <div className="background">
              <img src="uploads/test02.jpg" />
            </div>
            {/* <a href="#user"> */}
            <img className="circle" src="uploads/test01.jpg" />
            {/* </a> */}
            {/* <a href="#name"> */}
            <span className="white-text name">John Doe</span>
            {/* </a> */}
            {/* <a href="#email"> */}
            <span className="white-text email">jdandturk@gmail.com</span>
            {/* </a> */}
          </div>
        </li>

        <li>
          <a className="waves-effect" href="#">
            <i className="material-icons">cloud</i>
            Link link
          </a>
        </li>

        <li>
          <div className="divider"></div>
        </li>
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

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Sidebar);
// export default Sidebar;
