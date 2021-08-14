import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import * as actions from '../../../_actions/userAction';
import inputData from './inputData';
import renderInputFields from '../../UI/renderInputFields';

const RegisterForm = ({ registerUser, history }) => {
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
    <div className="row" style={{ margin: '10vh 0' }}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        {renderInputFields(inputData)}
        <Link to="/" className="red btn-flat white-text">
          Cancel
        </Link>
        <button
          type="submit"
          className="yellow darken-3 btn-flat right white-text"
        >
          Sign up
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(inputData, ({ name, noValueError }) => {
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
