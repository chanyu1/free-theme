import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';

import formInputField from './formInputField';

export default (formData) => {
  return _.map(formData, ({ label, name, type }) => {
    return (
      <Field
        label={label}
        name={name}
        type={type}
        key={name}
        component={formInputField}
      />
    );
  });
};
