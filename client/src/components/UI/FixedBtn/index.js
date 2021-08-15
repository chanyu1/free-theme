import React from 'react';
import { Link } from 'react-router-dom';

import classes from './style.module.css';

const FixedBtn = (props) => {
  return (
    <div className="fixed-action-btn">
      <Link
        to={props.location}
        className={`btn-floating btn-large waves-effect waves-light red ${classes.fixedBtn}`}
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default FixedBtn;
