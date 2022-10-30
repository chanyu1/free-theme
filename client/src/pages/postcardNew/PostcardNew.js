import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import { isLoading } from '../../_actions/commonAction';
import { uploadPostcard } from '../../_actions/postcardAction';
import fieldData from './data/fieldData';
import OrgPostcardNewForm from '../../components/atomic/organisms/OrgPostcardNewForm';

const FormWrapperDiv = styled.div`
  margin: 20vh 0;
`;

const PostcardNew = ({ uploadPostcard, isLoading, history }) => {
  const [photoNumber, setPhotoNumber] = useState(0);
  const [photos, setPhotos] = useState(null);

  const imgInputHandler = (event) => {
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

    isLoading(true);

    const formData = new FormData();
    _.each(photos, (photo) => {
      formData.append('image', photo);
    });
    formData.append('theme', event.target.theme.value);
    formData.append('description', event.target.description.value);

    uploadPostcard(formData, history).then(() => isLoading(false));
    setPhotoNumber(0);
    setPhotos(null);
  };

  return (
    <FormWrapperDiv className="row">
      <OrgPostcardNewForm
        imgInputHandler={imgInputHandler}
        photoNumber={photoNumber}
        onSubmit={onSubmitHandler}
        fieldData={fieldData}
        leftButtonText="Cancel"
        rightButtonText="Upload"
      />
    </FormWrapperDiv>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(fieldData, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'postcardNew',
})(connect(null, { uploadPostcard, isLoading })(withRouter(PostcardNew)));
