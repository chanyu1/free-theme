import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../_actions/postcardAction';
import PostcardModal from './UI/Modal/PostcardModal';

const PostcardsWrapperDiv = styled.div`
  column-width: 220px;
  column-gap: 20px;
  width: 90%;
  max-width: 1400px;
  margin: 60px auto;
`;
const PostcardDiv = styled.div`
  margin: 10px 0;
  text-align: left;
  display: inline-block;
`;
const ThemeDiv = styled.div`
  font-size: 1.3rem;
  padding-top: 24px;
  padding-bottom: 10px;
`;
const DescriptionDiv = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
`;
const OwnerDiv = styled.div`
  padding-top: 10px;
  padding-bottom: 24px;
`;

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
        <PostcardDiv
          className="card"
          onClick={() => openPostcardHandler(postcard.photos)}
          key={postcard._id}
        >
          <div className="card-image">
            <img src={postcard.photos[0].photoName} />
          </div>
          <ThemeDiv className="card-content">
            <p>{postcard.theme}</p>
          </ThemeDiv>
          <DescriptionDiv className="card-content">
            <p>&nbsp;&nbsp;{postcard.description}</p>
          </DescriptionDiv>
          <OwnerDiv className="card-content grey-text text-darken-1">
            <p>{postcard.owner}</p>
            <p>{postcard.ownerEmail}</p>
          </OwnerDiv>
        </PostcardDiv>
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
      <PostcardsWrapperDiv>{renderPostcards()}</PostcardsWrapperDiv>
    </Fragment>
  );
};

function mapStateToProps({ postcards, postcard1 }) {
  return { postcards, postcard1 };
}

export default connect(mapStateToProps, actions)(PostcardList);
