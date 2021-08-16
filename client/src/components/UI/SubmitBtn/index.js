import React from 'react';

// import classes from './style.module.css';

const SubmitBtn = (props) => {
  return (
    <button type="submit" className="teal btn-flat right white-text">
      {props.children}
      <i className="material-icons right">{props.icon}</i>
    </button>
  );
};

export default SubmitBtn;
