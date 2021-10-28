import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const PostcardModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          photoList={props.photoList}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root'),
      )}
    </Fragment>
  );
};

export default PostcardModal;
