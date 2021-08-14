import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../_actions/postcardAction';
import PostcardModal from '../../Modals/PostcardModal';

const PostcardList = ({ postcards, fetchPostcards }) => {
  const [openPostcard, setOpenPostcard] = useState(false);

  useEffect(() => {
    fetchPostcards();
  }, []);

  const clickPostcardHandler = () => {
    setOpenPostcard(true);
  };

  const closePostcardHandler = () => {
    setOpenPostcard(false);
  };

  const renderPostcards = () => {
    return postcards.reverse().map((postcard) => {
      return (
        <div key={postcard._id}>
          {openPostcard && (
            <PostcardModal
              // title={error.title}
              // message={error.message}
              onConfirm={closePostcardHandler}
            />
          )}
          <div
            onClick={clickPostcardHandler}
            className="card"
            style={{ width: '140px', margin: '25px 5px', float: 'left' }}
          >
            <div className="card-image">
              <img src={postcard.photos[0].photoName} />
              <span className="card-title">{postcard.theme}</span>
            </div>
            <div className="card-content">
              <p>{postcard.description}</p>
            </div>
            <div className="card-content">
              <p>{postcard.owner}</p>
              <p>{postcard.ownerEmail}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="container">{renderPostcards()}</div>;
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, actions)(PostcardList);
