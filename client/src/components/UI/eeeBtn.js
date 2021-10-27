import React from 'react';

const SubmitBtn = (props) => {
  return (
    <button
      type="submit"
      className={`${props.btnColor} btn-flat right white-text`}
      disabled={props.disabled}
    >
      {props.children}
      <i className="material-icons right">{props.icon}</i>
    </button>
  );
};

export default SubmitBtn;
