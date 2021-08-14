import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import * as actions from '../../../_actions/userAction';
import inputData from './inputData';
import renderInputFields from '../../UI/renderInputFields';

const LoginForm = ({ loginUser }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginUser({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };

  return (
    <div className="row" style={{ margin: '25vh 0' }}>
      <form className="col s6 offset-s3" onSubmit={onSubmitHandler}>
        {renderInputFields(inputData)}
        <Link to="/signup" className="yellow darken-3 btn-flat white-text">
          Sign up
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Log in
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
  form: 'loginForm',
})(connect(null, actions)(withRouter(LoginForm)));
