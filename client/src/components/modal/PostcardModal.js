import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const PostcardModal = ({ photoList, onConfirm }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay photoList={photoList} onConfirm={onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </Fragment>
  );
};

export default PostcardModal;
