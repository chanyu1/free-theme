import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions';
import formFieldTexts from './formFieldTexts';
import LoginField from './LoginField';

function LoginForm({ loginUser }) {
  const renderFields = () => {
    return _.map(formFieldTexts, ({ label, name, type }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          component={LoginField}
        />
      );
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    loginUser({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        {renderFields()}
        <Link to="/signup" className="yellow darken-3 btn-flat white-text">
          Sign Up
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Login
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
}

function validate(values) {
  const errors = {};

  _.each(formFieldTexts, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'loginForm',
})(connect(null, actions)(withRouter(LoginForm)));
