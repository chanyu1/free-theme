import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './style.module.css';
import * as actions from '../../_actions/postcardAction';
import PostcardModal from '../UI/Modal/PostcardModal';

const PostcardList = ({
  postcards,
  fetchPostcards,
  modalPostcard,
  postcard1,
  hideAddBtn,
  fixScrollbar,
}) => {
  useEffect(() => {
    fetchPostcards();
  }, []);

  const openPostcardHandler = (photos) => {
    modalPostcard(photos);
    hideAddBtn(true);
    fixScrollbar(true);
  };

  const closePostcardHandler = () => {
    modalPostcard([]);
    hideAddBtn(false);
    fixScrollbar(false);
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
            <p>&nbsp;&nbsp;{postcard.description}</p>
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
      {/* {console.log('2', modalPostcard)} */}
      {postcard1.length > 0 && (
        <PostcardModal
          photoList={postcard1}
          onConfirm={() => closePostcardHandler()}
        />
      )}
      <div className={classes.postcardsWrapper}>{renderPostcards()}</div>
    </Fragment>
  );
};

function mapStateToProps({ postcards, postcard1 }) {
  return { postcards, postcard1 };
}

export default connect(mapStateToProps, actions)(PostcardList);
