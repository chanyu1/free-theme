import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import * as actions from '../../_actions/userAction';
import registerFieldData from './data/fieldData';
import SubmitBtn from '../../components/UI/Btn';
import InputField from '../../components/UI/InputField';

const FormWrapperDiv = styled.div`
  margin: 10vh 0;
`;

const RegisterForm = ({ registerUser, history }) => {
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
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        {renderField(registerFieldData)}
        <Link to="/" className="white-text btn-flat red">
          Cancel
        </Link>
        <SubmitBtn btnColor="yellow darken-3" icon="done">
          Sign up
        </SubmitBtn>
      </form>
    </FormWrapperDiv>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(registerFieldData, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'registerForm',
})(connect(null, actions)(withRouter(RegisterForm)));
