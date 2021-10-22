import React, { Fragment } from 'react';

// import classes from './style.module.css';
import PostcardList from '../../components/PostcardList';
import FloatBtn from '../../components/UI/FloatBtn';

const Dashboard = () => {
  return (
    <Fragment>
      <PostcardList />
      <FloatBtn location="/postcards/new" icon="add" />
    </Fragment>
  );
};

export default Dashboard;
