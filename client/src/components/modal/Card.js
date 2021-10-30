import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  background: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  left: 20%;
  width: 60%;
  z-index: 100;
  // overflow-y: initial !important;
`;

const Card = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;
