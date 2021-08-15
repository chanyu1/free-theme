import React from 'react';

import classes from './style.module.css';

// eslint-disable-next-line react/display-name
export default ({ input, label, type, meta: { error, touched } }) => {
  let selectTag =
    type === 'textarea' ? (
      <textarea
        {...input}
        type={type}
        className={`materialize-textarea ${classes.inputTag}`}
      />
    ) : (
      <input {...input} type={type} className={classes.inputTag} />
    );

  return (
    <div>
      <label>{label}</label>
      {selectTag}
      <div className={`red-text ${classes.errorTag}`}>{touched && error}</div>
    </div>
  );
};
