import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Search';
import PostcardList from '../../components/PostcardList';
import AtmFloatBtn from '../../components/atomic/atoms/AtmFloatBtn';
import NowLoading from '../../components/NowLoading';

const Postcard = ({ common }) => {
  return common.isLoading ? (
    <NowLoading />
  ) : (
    <Fragment>
      <Search />
      <PostcardList />
      <AtmFloatBtn
        location="/postcard/new"
        icon="add"
        hideBtn={common.hideAddBtn}
      />
    </Fragment>
  );
};

function mapStateToProps({ common }) {
  return { common };
}

export default connect(mapStateToProps)(Postcard);
