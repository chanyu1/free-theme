import React from 'react';
import styled from 'styled-components';

const ErrorTagDiv = styled.div`
  margin-bottom: 20px;
`;

const MolTextareaField = ({
  input,
  label,
  type,
  maxLength,
  meta: { error, touched },
}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea
        {...input}
        type={type}
        maxLength={maxLength}
        className="materialize-textarea"
      />
      <ErrorTagDiv className="red-text">{touched && error}</ErrorTagDiv>
    </div>
  );
};

export default MolTextareaField;
