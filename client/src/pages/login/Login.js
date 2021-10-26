import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import * as actions from '../../_actions/userAction';
import fieldData from './data/fieldData';
import OrgLoginForm from '../../components/organisms/OrgLoginForm';

const FormWrapperDiv = styled.div`
  margin: 25vh 0;
`;

const Login = ({ loginUser }) => {
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
    <FormWrapperDiv className="row">
      <OrgLoginForm
        onSubmit={onSubmitHandler}
        fieldData={fieldData}
        leftButtonText="Sign up"
        rightButtonText="Log in"
      />
    </FormWrapperDiv>
  );
};

const validate = (values) => {
  const errors = {};
  _.each(fieldData, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'login',
})(connect(null, actions)(withRouter(Login)));
