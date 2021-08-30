import React from 'react';
// import { useEffect } from 'react';

import classes from './style.module.css';
// import M from 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';

// eslint-disable-next-line react/display-name
export default ({
  input,
  label,
  type,
  maxLength,
  meta: { error, touched },
}) => {
  // useEffect(() => {
  //   let input = document.getElementById('input_text');
  //   M.CharacterCounter.init(input);
  // }, []);

  let selectTag =
    type === 'textarea' ? (
      <textarea
        {...input}
        type={type}
        maxLength={maxLength}
        className={`materialize-textarea ${classes.inputTag}`}
      />
    ) : (
      <input
        {...input}
        type={type}
        maxLength={maxLength}
        className={classes.inputTag}
      />
    );

  return (
    <div>
      <label>{label}</label>
      {selectTag}
      <div className={`red-text ${classes.errorTag}`}>{touched && error}</div>
    </div>
  );
};
