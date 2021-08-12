import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../_actions/postcardAction';

const PostcardList = ({ postcards, fetchPostcards }) => {
  useEffect(() => {
    fetchPostcards();
  }, []);

  const renderPostcards = () => {
    return postcards.reverse().map((postcard) => {
      return (
        <div className="row" key={postcard._id}>
          <div className="col s3 m3">
            <div className="card">
              <div className="card-image">
                <img src={postcard.photos[0].photoName} />
                <span className="card-title">{postcard.theme}</span>
              </div>
              <div className="card-content">
                <p>{postcard.description}</p>
              </div>
            </div>
          </div>
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
