import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './style.module.css';
import ModalCard from '../../UI/ModalCard';
import Button from '../../UI/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalCard className={classes.modal}>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>X</Button>
      </footer>
      <div className={classes.content}>a</div>
    </ModalCard>
  );
};

const PostcardModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root'),
      )}
    </Fragment>
  );
};

export default PostcardModal;
