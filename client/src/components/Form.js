import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
// import styled from 'styled-components';

// import * as actions from '../../_actions/userAction';
// import renderField from '../renderField';
// import SubmitBtn from '../../components/UI/Btn';
import InputField from '../../components/UI/InputField';

const Form = ({ onSubmit, fieldData, loginUser }) => {
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

  return (
    <form className="col s6 offset-s3" onSubmit={onSubmit}>
      {renderField(fieldData)}
      {/* <Link to="/signup" className="white-text btn-flat yellow darken-3">
          Sign up
        </Link> */}
      {/* <SubmitBtn btnColor="teal" icon="done">
          Log in
        </SubmitBtn> */}
    </form>
  );
};

export default Form;
