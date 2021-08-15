import React from 'react';

// import classes from './style.module.css';

const Button = (props) => {
  return (
    <button className="btn-flat right" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
