import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './FloatBtn.module.css';

const AddBtn = (props) => {
  return (
    <div className="fixed-action-btn">
      <Link
        to={props.location}
        className={`btn-floating btn-large waves-effect waves-light blue-grey darken-1 ${
          classes.addBtn
        } ${props.hideBtn && classes.btnDisplay}`}
      >
        <i className="material-icons">{props.icon}</i>
      </Link>
    </div>
  );
};
function mapStateToProps({ hideBtn }) {
  return { hideBtn };
}

export default connect(mapStateToProps)(AddBtn);
