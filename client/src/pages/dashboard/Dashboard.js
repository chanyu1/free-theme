import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostcardList from '../../components/PostcardList';
import AtmFloatBtn from '../../components/atoms/AtmFloatBtn';

const Dashboard = ({ hideBtn }) => {
  return (
    <Fragment>
      <PostcardList />
      <AtmFloatBtn location="/postcards/new" icon="add" hideBtn={hideBtn} />
    </Fragment>
  );
};

function mapStateToProps({ hideBtn }) {
  return { hideBtn };
}

export default connect(mapStateToProps)(Dashboard);
