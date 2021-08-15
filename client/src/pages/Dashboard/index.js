import React, { Fragment } from 'react';

// import classes from './style.module.css';
import PostcardList from '../../components/PostcardList';
import FixedBtn from '../../components/UI/FixedBtn';

const Dashboard = () => {
  return (
    <Fragment>
      <PostcardList />
      <FixedBtn location="/postcards/new" />
    </Fragment>
  );
};

export default Dashboard;
