import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../_actions';

const PostcardList = ({ postcards, fetchPostcards }) => {
  useEffect(() => {
    fetchPostcards();
  }, []);

  const renderPostcards = () => {
    return postcards.reverse().map((postcard) => {
      return (
        <div className="card darken-1" key={postcard._id}>
          {/* <div className="card-content">
            <span className="card-title">
              <img src={postcard.photos[0].photoPath} />
            </span>
            <p>{postcard.photos.photoPath}</p>
            <p className="right">
              Sent On: {new Date(postcard.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action"></div> */}
        </div>
      );
    });
  };

  return <div>{renderPostcards()}</div>;
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, actions)(PostcardList);
