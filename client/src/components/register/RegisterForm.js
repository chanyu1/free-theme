import _ from 'lodash';
import React from 'react';
import { Field } from 'redux-form';

import registerFormFields from './RegisterFormFields';

function RegisterForm() {
  const renderFields = () => {
    return _.map(registerFormFields, ({ label, name }) => {
      return <Field key={name} component={a} type={a} label={a} name={a} />;
    });
  };

  return (
    <div>
      <form>{renderFields}</form>
    </div>
  );
}

export default RegisterForm;
