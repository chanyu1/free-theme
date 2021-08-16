import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import classes from './style.module.css';
import * as actions from '../../../_actions/userAction';
import loginFieldData from '../../../commons/loginFieldData';
import renderField from '../renderField';
import SubmitBtn from '../../UI/SubmitBtn';
import LinkBtn from '../../UI/LinkBtn';

const LoginForm = ({ loginUser }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!event.target.email.value || !event.target.password.value) {
      return alert('Provide a whole field.');
    }

    loginUser({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };

  return (
    <div className={`row ${classes.formWrapper}`}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        {renderField(loginFieldData)}
        <LinkBtn location="/signup" color="yellow darken-3">
          Sign up
        </LinkBtn>
        <SubmitBtn icon="done">Log in</SubmitBtn>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(loginFieldData, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'loginForm',
})(connect(null, actions)(withRouter(LoginForm)));
