import React from 'react';

import classes from './style.module.css';
import Card from '../Card';
import CloseBtn from '../CloseBtn';

const ModalOverlay = (props) => {
  const renderPhoto = () => {
    return props.photoList.map((photo) => {
      return (
        <div className={classes.photo} key={photo.photoName}>
          <img src={photo.photoName} />
        </div>
      );
    });
  };

  return (
    <Card className={classes.modal}>
      <CloseBtn onClick={props.onConfirm}>Close</CloseBtn>
      <div className={classes.content}>{renderPhoto()}</div>
    </Card>
  );
};

export default ModalOverlay;
