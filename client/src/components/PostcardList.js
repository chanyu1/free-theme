import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { hideAddBtn, fixScrollbar } from '../_actions/commonAction';
import { fetchPostcards, postcardModal } from '../_actions/postcardAction';
import PostcardModal from './modal/PostcardModal';

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
  cursor: pointer;
`;
const ThemeDiv = styled.div`
  font-size: 1.3rem;
  padding: 16px 18px 8px;
`;
const DescriptionDiv = styled.div`
  padding: 6px 18px;
`;
const OwnerDiv = styled.div`
  padding: 8px 18px 16px;
`;

const PostcardList = ({
  fetchPostcards,
  postcardModal,
  hideAddBtn,
  fixScrollbar,
  postcards,
}) => {
  useEffect(() => {
    fetchPostcards();
  }, []);

  const openPostcardHandler = (photos) => {
    postcardModal(photos);
    hideAddBtn(true);
    fixScrollbar(true);
  };

  const closePostcardHandler = () => {
    postcardModal([]);
    hideAddBtn(false);
    fixScrollbar(false);
  };

  const renderPostcards = () => {
    let postcardData =
      postcards.searchPostcardList.length > 0
        ? postcards.searchPostcardList
        : postcards.postcardList;

    return postcardData.map((postcard) => {
      return (
        <PostcardDiv
          className="card"
          onClick={() => openPostcardHandler(postcard.photos)}
          key={postcard._id}
        >
          <div className="card-image">
            <img src={postcard.photos[0].photoName} />
          </div>
          <ThemeDiv>{postcard.theme}</ThemeDiv>
          <DescriptionDiv>&nbsp;&nbsp;{postcard.description}</DescriptionDiv>
          <OwnerDiv className="grey-text text-darken-1">
            {postcard.owner}
            {/* {postcard.ownerEmail} */}
          </OwnerDiv>
        </PostcardDiv>
      );
    });
  };

  return (
    <Fragment>
      {postcards.postcardModal.length > 0 && (
        <PostcardModal
          photoList={postcards.postcardModal}
          onConfirm={() => closePostcardHandler()}
        />
      )}
      <PostcardsWrapperDiv>{renderPostcards()}</PostcardsWrapperDiv>
    </Fragment>
  );
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, {
  hideAddBtn,
  fixScrollbar,
  fetchPostcards,
  postcardModal,
})(PostcardList);
