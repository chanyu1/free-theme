import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import classes from './style.module.css';
import * as actions from '../../../_actions/postcardAction';
import postcardFieldData from '../../../commons/postcardFieldData';
import renderField from '../renderField';
import SubmitBtn from '../../UI/SubmitBtn';

const PostcardForm = ({ uploadPostcard, history }) => {
  const [photoNumber, setPhotoNumber] = useState('');
  const [photos, setPhotos] = useState(null);

  const fileSelectHandler = (event) => {
    if (event.target.files.length > 0) {
      setPhotoNumber(event.target.files.length);
      setPhotos(event.target.files);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !photos ||
      !event.target.theme.value ||
      !event.target.description.value
    ) {
      return alert('Provide a whole field.');
    }

    const formData = new FormData();
    _.each(photos, (photo) => {
      formData.append('image', photo);
    });
    formData.append('theme', event.target.theme.value);
    formData.append('description', event.target.description.value);

    uploadPostcard(formData, history);
    setPhotoNumber('');
    setPhotos(null);
  };

  return (
    <div className={`row ${classes.formWrapper}`}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        <div className="file-field input-field">
          <div className="btn blue">
            <span>File</span>
            <input
              name="photos"
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={fileSelectHandler}
              multiple
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate grey-text text-darken-1"
              type="text"
              placeholder=" Upload one or more photos"
              value={photoNumber && ` You added ${photoNumber} photos`}
              readOnly
            />
          </div>
        </div>
        {renderField(postcardFieldData)}
        <Link to="/postcards" className="white-text btn-flat red">
          Cancel
        </Link>
        <SubmitBtn btnColor="yellow darken-3" icon="done">
          Upload
        </SubmitBtn>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(postcardFieldData, ({ name, noValueError }) => {
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
