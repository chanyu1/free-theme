import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostcardList from '../../components/PostcardList';
import AtmFloatBtn from '../../components/atomic/atoms/AtmFloatBtn';

const Postcard = ({ common }) => {
  return (
    <Fragment>
      <PostcardList />
      <AtmFloatBtn
        location="/photography/new"
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
