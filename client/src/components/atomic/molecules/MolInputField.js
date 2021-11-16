import React from 'react';
import styled from 'styled-components';

const ErrorTagDiv = styled.div`
  margin-bottom: 20px;
`;

const MolInputField = ({
  input,
  label,
  type,
  maxLength,
  meta: { error, touched },
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} maxLength={maxLength} />
      <ErrorTagDiv className="red-text">{touched && error}</ErrorTagDiv>
    </div>
  );
};

export default MolInputField;
