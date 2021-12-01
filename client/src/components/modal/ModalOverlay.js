import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import CloseBtn from './CloseBtn';

const PhotoImg = styled.img`
  width: 100%;
  margin-bottom: -5px;
`;
const ModalDiv = styled.div`
  position: fixed;
  left: 15%;
  width: 70%;
  z-index: 100;
  overflow-y: initial !important;
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;
const ContentDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ModalOverlay = ({ photoList, onConfirm }) => {
  const renderPhoto = () => {
    return photoList.map((photo) => {
      return (
        <div key={photo.photoName}>
          <PhotoImg src={photo.photoName} />
        </div>
      );
    });
  };

  return (
    <ModalDiv>
      <Card>
        <CloseBtn onClick={onConfirm}>Close</CloseBtn>
        <ContentDiv>{renderPhoto()}</ContentDiv>
      </Card>
    </ModalDiv>
  );
};

export default ModalOverlay;
