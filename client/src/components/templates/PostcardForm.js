import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions/postcardAction';
import PostcardFormTexts from '../../commons/PostcardFormTexts';
import formField from '../UI/molecules/formField';

const PostcardForm = ({ uploadPostcard, history }) => {
  const [photos, setPhotos] = useState(null);

  const fileSelectHandler = (event) => {
    setPhotos(event.target.files);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    _.each(photos, (photo) => {
      formData.append('image', photo);
    });
    formData.append('theme', event.target.theme.value);
    formData.append('description', event.target.description.value);

    uploadPostcard(formData, history);
    setPhotos(null);
  };

  return (
    <div className="row" style={{ margin: '15vh 0' }}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        <div className="file-field input-field">
          <div className="btn">
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
              className="file-path validate"
              type="text"
              placeholder="Upload one or more photos"
            />
          </div>
        </div>

        <div>
          <label>Theme</label>
          <input name="theme" type="text" style={{ marginBottom: '15px' }} />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            className="materialize-textarea"
            style={{ marginBottom: '20px' }}
          />
        </div>

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
  _.each(PostcardFormTexts, ({ name, noValueError }) => {
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
