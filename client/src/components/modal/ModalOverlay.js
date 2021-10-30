import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import CloseBtn from './CloseBtn';

const PhotoImg = styled.img`
  width: 100%;
  margin-bottom: -5px;
`;
const ContentDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

// .content::-webkit-scrollbar {
//   display: none; /* Chrome, Safari, Opera */
// }
// @media (min-width: 768px) {
//   .modal {
//     left: calc(50% - 25rem);
//     width: 50rem;
//   }
// }

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
    <Card>
      <CloseBtn onClick={onConfirm}>Close</CloseBtn>
      <ContentDiv>{renderPhoto()}</ContentDiv>
    </Card>
  );
};

export default ModalOverlay;
