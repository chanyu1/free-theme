import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions';
import formFieldTexts from './formFieldTexts';
import PhotoField from './PhotoField';

const PhotoForm = ({ submitPhoto, history }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // const renderFields = () => {
  //   return _.map(formFieldTexts, ({ label, name, type }) => {
  //     return (
  //       <Field
  //         label={label}
  //         name={name}
  //         type={type}
  //         key={name}
  //         component={PhotoField}
  //       />
  //     );
  //   });
  // };

  const fileSelectHandler = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);

    submitPhoto(formData, history);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={fileSelectHandler}
        />
        {/* {renderFields()} */}
        <Link to="/photos" className="red white-text btn-flat">
          Cancel
        </Link>
        <button
          type="submit"
          className="yellow darken-3 btn-flat right white-text"
        >
          Submit
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  _.each(formFieldTexts, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'photoForm',
})(connect(null, actions)(withRouter(PhotoForm)));
