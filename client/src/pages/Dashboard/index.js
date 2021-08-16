import React, { Fragment } from 'react';

// import classes from './style.module.css';
import PostcardList from '../../components/PostcardList';
import AddBtn from '../../components/UI/AddBtn';

const Dashboard = () => {
  return (
    <Fragment>
      <PostcardList />
      <AddBtn location="/postcards/new" icon="add" />
    </Fragment>
  );
};

export default Dashboard;
