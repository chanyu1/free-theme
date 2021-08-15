import React from 'react';

import classes from './style.module.css';
import Card from '../Card';
import CloseBtn from '../CloseBtn';

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <CloseBtn onClick={props.onConfirm}>close</CloseBtn>
      <div className={classes.content}>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        {/* <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div>
        <div className={classes.photo}>
          <img src={props.photoList[0].photoName} />
        </div> */}
      </div>
    </Card>
  );
};

export default ModalOverlay;
