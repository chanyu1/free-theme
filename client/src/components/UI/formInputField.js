import React from 'react';

// eslint-disable-next-line react/display-name
export default ({ input, label, type, meta: { error, touched } }) => {
  let selectTag =
    type === 'textarea' ? (
      <textarea
        {...input}
        type={type}
        className="materialize-textarea"
        style={{ marginBottom: '15px' }}
      />
    ) : (
      <input {...input} type={type} style={{ marginBottom: '15px' }} />
    );

  return (
    <div>
      <label>{label}</label>
      {selectTag}
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
