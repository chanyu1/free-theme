import React from 'react';
import { Link } from 'react-router-dom';

// import classes from './style.module.css';

const LinkBtn = (props) => {
  return (
    <Link to={props.location} className={`white-text btn-flat ${props.color}`}>
      {props.children}
    </Link>
  );
};

export default LinkBtn;
