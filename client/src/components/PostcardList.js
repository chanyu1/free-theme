import React, { useEffect, Fragment, useState } from 'react';
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
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchPostcards();
  }, []);

  const onChangeSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (search === null || search === '') {
      //
    } else {
      const filterData = postcards.postcardList.filter((row) =>
        row.theme.includes(search),
      );
      console.log(filterData);
      console.log(postcards);
      setSearch('');
    }
  };

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
    // console.log(lists);
    // if (lists.length === 0) {
    //   return lists.map((postcard) => {
    //     return (
    //       <PostcardDiv
    //         className="card"
    //         onClick={() => openPostcardHandler(postcard.photos)}
    //         key={postcard._id}
    //       >
    //         <div className="card-image">
    //           <img src={postcard.photos[0].photoName} />
    //         </div>
    //         <ThemeDiv>{postcard.theme}</ThemeDiv>
    //         <DescriptionDiv>&nbsp;&nbsp;{postcard.description}</DescriptionDiv>
    //         <OwnerDiv className="grey-text text-darken-1">
    //           {postcard.owner}
    //           {/* {postcard.ownerEmail} */}
    //         </OwnerDiv>
    //       </PostcardDiv>
    //     );
    //   });
    // } else {
    return postcards.postcardList.map((postcard) => {
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
    // }
  };

  return (
    <Fragment>
      {postcards.postcardModal.length > 0 && (
        <PostcardModal
          photoList={postcards.postcardModal}
          onConfirm={() => closePostcardHandler()}
        />
      )}
      <form onSubmit={(e) => onSearch(e)}>
        <input type="text" value={search} onChange={onChangeSearch} />
        <button type="submit">search</button>
      </form>
      <PostcardsWrapperDiv>{renderPostcards()}</PostcardsWrapperDiv>
    </Fragment>
  );
};

function mapStateToProps({ postcards }) {
  console.log(postcards);
  return { postcards };
}

export default connect(mapStateToProps, {
  hideAddBtn,
  fixScrollbar,
  fetchPostcards,
  postcardModal,
})(PostcardList);
