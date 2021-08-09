import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions';
import LoginFormTexts from '../UI/atoms/LoginFormTexts';
import formField from '../UI/molecules/formField';

const LoginForm = ({ loginUser }) => {
  const renderFields = () => {
    return _.map(LoginFormTexts, ({ label, name, type }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          component={formField}
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
        height: '85vh',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        {renderFields()}
        <Link to="/signup" className="yellow darken-3 btn-flat white-text">
          Sign up
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Login
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(LoginFormTexts, ({ name, noValueError }) => {
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
