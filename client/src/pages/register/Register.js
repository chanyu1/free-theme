import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import { registerUser } from '../../_actions/userAction';
import fieldData from './data/fieldData';
import OrgRegisterForm from '../../components/atomic/organisms/OrgRegisterForm';
import validateEmails from '../../utils/validateEmails';

const FormWrapperDiv = styled.div`
  margin: 15vh 0;
`;

const Register = ({ registerUser, history }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !event.target.email.value ||
      !event.target.name.value ||
      !event.target.password.value ||
      !event.target.confirmPassword.value
    ) {
      return alert('Provide a whole field.');
    } else if (
      event.target.password.value !== event.target.confirmPassword.value
    ) {
      return alert('Passwords do not match.');
    }
    registerUser(
      {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
      },
      history,
    );
  };

  return (
    <FormWrapperDiv className="row">
      <OrgRegisterForm
        onSubmit={onSubmitHandler}
        fieldData={fieldData}
        leftButtonText="Cancel"
        rightButtonText="Sign up"
      />
    </FormWrapperDiv>
  );
};

const validate = (values) => {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(fieldData, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'register',
})(connect(null, { registerUser })(withRouter(Register)));
