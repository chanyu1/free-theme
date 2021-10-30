import React from 'react';
import styled from 'styled-components';

const CloseBtnDiv = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 1.2rem;
`;

const CloseBtn = ({ onClick, children }) => {
  return (
    <CloseBtnDiv>
      <button className="btn-flat right white-text" onClick={onClick}>
        {children}
      </button>
    </CloseBtnDiv>
  );
};

export default CloseBtn;
