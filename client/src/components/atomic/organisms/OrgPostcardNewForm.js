import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import AtmBtn from '../atoms/AtmBtn';
import MolImgInputField from '../molecules/MolImgInputField';
import MolInputField from '../molecules/MolInputField';
import MolTextareaField from '../molecules/MolTextareaField';

/**
 * @param {function} imgInputHandler
 * @param {function} onSubmit
 * @param {Number}   photoNumber
 * @param {Array}    fieldData
 * @param {String}   leftButtonText
 * @param {String}   rightButtonText
 */
const OrgPostcardNewForm = ({
  imgInputHandler,
  onSubmit,
  photoNumber,
  fieldData,
  leftButtonText,
  rightButtonText,
}) => {
  const renderInputField = (fieldData) => {
    return _.map(fieldData, ({ label, name, type, maxLength }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          maxLength={maxLength}
          component={type === 'textarea' ? MolTextareaField : MolInputField}
        />
      );
    });
  };

  return (
    <form className="col s6 offset-s3" onSubmit={onSubmit}>
      <MolImgInputField
        imgInputHandler={imgInputHandler}
        btnText="File"
        placeholder=" Upload one or more photos"
        inputFiledText={
          photoNumber > 0 ? ` You added ${photoNumber} photos` : ''
        }
      />
      {renderInputField(fieldData)}
      <Link to="/postcard" className="white-text btn-flat red">
        {leftButtonText}
      </Link>
      <AtmBtn
        buttonText={rightButtonText}
        color="yellow darken-3"
        icon="done"
        // isDisabled={true}
      />
    </form>
  );
};

export default OrgPostcardNewForm;
