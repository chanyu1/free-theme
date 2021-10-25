import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import * as actions from '../../_actions/postcardAction';
import postcardFieldData from './data/fieldData';
import Btn from '../../components/UI/Btn';
import InputField from '../../components/UI/InputField';

const FormWrapperDiv = styled.div`
  margin: 15vh 0;
`;

const PostcardNewForm = ({ uploadPostcard, history }) => {
  const [photoNumber, setPhotoNumber] = useState('');
  const [photos, setPhotos] = useState(null);

  const renderField = (fieldData) => {
    return _.map(fieldData, ({ label, name, type, maxLength }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          maxLength={maxLength}
          component={InputField}
        />
      );
    });
  };

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
    <FormWrapperDiv className="row">
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
        <Btn btnColor="yellow darken-3" icon="done">
          Upload
        </Btn>
      </form>
    </FormWrapperDiv>
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
  form: 'postcardNewForm',
})(connect(null, actions)(withRouter(PostcardNewForm)));
