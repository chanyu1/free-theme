import React from 'react';

import classes from './style.module.css';

const CloseBtn = (props) => {
  return (
    <button
      className={`btn-flat right white-text ${classes.closeBtn}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default CloseBtn;
