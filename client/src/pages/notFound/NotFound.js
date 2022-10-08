import React from 'react';
import styled from 'styled-components';

const NotFoundDiv = styled.div`
  font-size: 2em;
  margin: 10px;
`;

const NotFound = () => {
  return <NotFoundDiv>404 not found</NotFoundDiv>;
};

export default NotFound;
