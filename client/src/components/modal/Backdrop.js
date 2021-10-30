import React from 'react';
import styled from 'styled-components';

const BackdropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
`;

const Backdrop = ({ onConfirm }) => {
  return <BackdropDiv onClick={onConfirm} />;
};

export default Backdrop;
