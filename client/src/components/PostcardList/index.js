import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';
import * as actions from '../../_actions/postcardAction';
import PostcardModal from '../UI/Modal/PostcardModal';

const PostcardList = ({ postcards, fetchPostcards }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPostcards();
  }, []);

  const renderPostcards = () => {
    return postcards.map((postcard) => {
      return (
        <div
          onClick={() => setPhotos(postcard.photos)}
          className={`card ${classes.postcard}`}
          key={postcard._id}
        >
          <div className="card-image">
            <img src={postcard.photos[0].photoName} />
            <span className="card-title">{postcard.theme}</span>
          </div>
          <div className="card-content">
            <p>{postcard.description}</p>
          </div>
          <div className="card-content grey-text text-darken-1">
            <p>{postcard.owner}</p>
            <p>{postcard.ownerEmail}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {photos && (
        <PostcardModal photoList={photos} onConfirm={() => setPhotos(null)} />
      )}
      <div className="container">{renderPostcards()}</div>
    </div>
  );
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, actions)(PostcardList);
