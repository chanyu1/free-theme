import React, { Fragment } from 'react';

import PostcardList from '../../components/Lists/PostcardList';
import AddPostcardBtn from '../../components/UI/AddPostcardBtn';

const Dashboard = () => {
  return (
    <Fragment>
      <PostcardList />
      <AddPostcardBtn />
    </Fragment>
  );
};

export default Dashboard;
