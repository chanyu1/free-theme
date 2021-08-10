import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import * as actions from '../../_actions/postcardAction';

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

    uploadPostcard(formData, history);
    setPhotos(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '85vh',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <label>Photos</label>
        <input
          name="photos"
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={fileSelectHandler}
          multiple
        />
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

export default reduxForm({
  form: 'postcardForm',
})(connect(null, actions)(withRouter(PostcardForm)));
