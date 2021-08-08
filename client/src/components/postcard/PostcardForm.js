import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions';
import formFieldTexts from './formFieldTexts';
import formField from '../UI/molecules/formField';

const PostcardForm = ({ uploadPostcard, history }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const renderFields = () => {
    return _.map(formFieldTexts, ({ label, name, type }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          component={formField}
        />
      );
    });
  };

  const fileSelectHandler = (event) => {
    setSelectedFiles(event.target.files);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    _.each(selectedFiles, (File) => {
      formData.append('image', File);
    });
    uploadPostcard(formData, history);
    setSelectedFiles(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={fileSelectHandler}
          multiple
        />
        {renderFields()}
        <Link to="/postcards" className="red white-text btn-flat">
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

const validate = (values) => {
  const errors = {};
  _.each(formFieldTexts, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'postcardForm',
})(connect(null, actions)(withRouter(PostcardForm)));
