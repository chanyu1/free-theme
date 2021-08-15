import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';

// import classes from './style.module.css';
import InputField from '../../UI/InputField';

export default (formData) => {
  return _.map(formData, ({ label, name, type }) => {
    return (
      <Field
        label={label}
        name={name}
        type={type}
        key={name}
        component={InputField}
      />
    );
  });
};
