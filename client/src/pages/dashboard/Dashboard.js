import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostcardList from '../../components/PostcardList';
// import AtmFloatBtn from '../../components/atomic/atoms/AtmFloatBtn';

const Dashboard = ({ common }) => {
  return (
    <Fragment>
      <PostcardList />
      {/* <AtmFloatBtn
        location="/postcards/new"
        icon="add"
        hideBtn={common.hideAddBtn}
      /> */}
    </Fragment>
  );
};

function mapStateToProps({ common }) {
  return { common };
}

export default connect(mapStateToProps)(Dashboard);
