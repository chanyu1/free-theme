import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';
import * as actions from '../../_actions/postcardAction';
import PostcardModal from '../UI/Modal/PostcardModal';

const PostcardList = ({ postcards, fetchPostcards, hideAddBtn }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPostcards();
  }, []);

  const openPostcardHandler = (photos) => {
    setPhotos(photos);
    hideAddBtn(true);
  };

  const closePostcardHandler = () => {
    setPhotos(null);
    hideAddBtn(false);
  };

  const renderPostcards = () => {
    return postcards.map((postcard) => {
      return (
        <div
          onClick={() => openPostcardHandler(postcard.photos)}
          className={`card ${classes.postcard}`}
          key={postcard._id}
        >
          <div className="card-image">
            <img src={postcard.photos[0].photoName} />
          </div>
          <div className={`card-content ${classes.theme}`}>
            <p>{postcard.theme}</p>
          </div>
          <div className={`card-content ${classes.description}`}>
            <p>{postcard.description}</p>
          </div>
          <div
            className={`card-content grey-text text-darken-1 ${classes.owner}`}
          >
            <p>{postcard.owner}</p>
            <p>{postcard.ownerEmail}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      {photos && (
        <PostcardModal
          photoList={photos}
          onConfirm={() => closePostcardHandler()}
        />
      )}
      <div className={classes.postcardsWrapper}>{renderPostcards()}</div>
    </Fragment>
  );
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, actions)(PostcardList);
