import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import classes from './style.module.css';
import M from 'materialize-css/dist/js/materialize.min.js';

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
        <li>
          <a className="blue-grey white-text sidenav-close">
            <i className="material-icons white-text">close</i>
          </a>
        </li>

        <li>
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
          <a href="#!">
            <i className="material-icons">cloud</i>First Link With Icon
          </a>
        </li>

        <li>
          <a href="#!">Second Link</a>
        </li>

        <li>
          <div className="divider"></div>
        </li>

        <li>
          <a className="subheader">Subheader</a>
        </li>

        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
            {console.log(user)}
          </a>
        </li>
      </ul>

      <a
        href="#"
        data-target="slide-out"
        className="sidenav-trigger show-on-large"
      >
        <i className="material-icons">menu</i>
      </a>
    </span>
  );
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(Sidebar);
// export default Sidebar;
