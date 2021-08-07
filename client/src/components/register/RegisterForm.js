import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../_actions';
import formFieldTexts from './formFieldTexts';
import RegisterField from './RegisterField';

const RegisterForm = ({ registerUser, history }) => {
  const renderFields = () => {
    return _.map(formFieldTexts, ({ label, name, type }) => {
      return (
        <Field
          label={label}
          name={name}
          type={type}
          key={name}
          component={RegisterField}
        />
      );
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    event.target.password.value === event.target.confirmPassword.value
      ? registerUser(
          {
            email: event.target.email.value,
            password: event.target.password.value,
            name: event.target.name.value,
          },
          history,
        )
      : alert('Passwords do not match.');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <form onSubmit={onSubmitHandler}>
        {renderFields()}
        <Link to="/" className="red btn-flat white-text">
          Cancel
        </Link>
        <button
          type="submit"
          className="yellow darken-3 btn-flat right white-text"
        >
          Sign Up
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

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
  form: 'registerForm',
})(connect(null, actions)(withRouter(RegisterForm)));
