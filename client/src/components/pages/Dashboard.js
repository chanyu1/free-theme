import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import PostcardList from '../UI/organisms/PostcardList';

const Dashboard = () => {
  return (
    <Fragment>
      <div className="container">
        <PostcardList />
      </div>
      <div className="fixed-action-btn">
        <Link
          style={{ position: 'absolute', bottom: '50px', right: '50px' }}
          to="/postcards/new"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </Fragment>
  );
};

export default withRouter(Dashboard);
