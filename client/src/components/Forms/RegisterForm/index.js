import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import classes from './style.module.css';
import * as actions from '../../../_actions/userAction';
import registerFieldData from '../../../commons/registerFieldData';
import renderField from '../renderField';
import SubmitBtn from '../../UI/SubmitBtn';
import LinkBtn from '../../UI/LinkBtn';

const RegisterForm = ({ registerUser, history }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !event.target.email.value ||
      event.target.name.value ||
      !event.target.password.value ||
      event.target.confirmPassword.value
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
    <div className={`row ${classes.formWrapper}`}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        {renderField(registerFieldData)}
        <LinkBtn location="/" color="red">
          Cancel
        </LinkBtn>
        <SubmitBtn>Sign up</SubmitBtn>
      </form>
    </div>
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
