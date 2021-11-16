import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import AtmBtn from '../atoms/AtmBtn';
import MolInputField from '../molecules/MolInputField';

/**
 * @param {function} onSubmit
 * @param {Array}    fieldData
 * @param {String}   leftButtonText
 * @param {String}   rightButtonText
 */
const OrgLoginForm = ({
  onSubmit,
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
          component={MolInputField}
        />
      );
    });
  };

  return (
    <form className="col s6 offset-s3" onSubmit={onSubmit}>
      {renderInputField(fieldData)}
      <Link to="/signup" className="white-text btn-flat yellow darken-3">
        {leftButtonText}
      </Link>
      <AtmBtn buttonText={rightButtonText} color="teal" icon="done" />
    </form>
  );
};

export default OrgLoginForm;
