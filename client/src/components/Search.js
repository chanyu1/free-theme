import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AtmBtn from './atomic/atoms/AtmBtn';
import { searchPostcards } from '../_actions/postcardAction';

const SearchDiv = styled.div`
  margin: 2vh 20%;
  display: flex;
`;

const Search = ({ searchPostcards, postcards }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();

    if (search === null || search === '') {
      searchPostcards(postcards.postcardList);
    } else {
      const filterData = postcards.postcardList.filter((row) =>
        row.theme.toLowerCase().includes(search.toLowerCase()),
      );
      if (filterData.length === 0) {
        return alert('No search data found.');
      }
      searchPostcards(filterData);
      setSearch('');
    }
  };

  return (
    <form className="col s6 offset-s3" onSubmit={(e) => onSearch(e)}>
      <SearchDiv>
        <input
          type="text"
          value={search}
          onChange={onChangeSearch}
          placeholder="Input search text"
        />
        <AtmBtn buttonText="search" color="blue" />
      </SearchDiv>
    </form>
  );
};

function mapStateToProps({ postcards }) {
  return { postcards };
}

export default connect(mapStateToProps, { searchPostcards })(Search);
